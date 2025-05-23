import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAreas } from '../../../api/areas';
import {
  selectAreaOptions,
  selectIsLoading,
} from '../../../redux/selectors/areasSelectors';

import Loader from '../../Loader/Loader';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedAreaSelect = ({ name, placeholder, onChange }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectAreaOptions);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  if (isLoading) {
    return <Loader padding="0" />;
  }

  return (
    <ConnectedSelect
      name={name}
      options={options}
      defaultValue="Unknown"
      placeholder={placeholder || "Select an area"}
      onChange={onChange}
    />
  );
};

export default ConnectedAreaSelect;
