import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Selector.scss';
import Icon from '../Icon/Icon.jsx';

function Selector({
  label = 'Not selected',
  listSelector,
  selectedSelector,
  reducer,
}) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleSelect = (name) => {
    dispatch(reducer(name));
    setIsOpen(false);
  };

  // Reset selected option
  const handleReset = () => {
    dispatch(reducer(''));
    setIsOpen(false);
  };

  // Close modal when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="selector-wrapper" ref={ref}>
      <button className="selector" onClick={() => setIsOpen((prev) => !prev)}>
        {selectedSelector ? (
          <p className="text-selected">{selectedSelector}</p>
        ) : (
          <p className="text-default">{label}</p>
        )}
        {(!isOpen && (
          <Icon name="chevron-down" size={18} color="#000000" />
        )) || <Icon name="chevron-up" size={18} color="#000000" />}
      </button>

      {isOpen && (
        <ul className="list">
          {selectedSelector && (
            <li className="list-item-reset" onClick={handleReset}>
              Clear filter
            </li>
          )}

          {listSelector?.map((item) => (
            <li
              className="list-item"
              key={item._id}
              onClick={() => handleSelect(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Selector;
