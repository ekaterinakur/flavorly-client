import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../api/categories';
import {
  selectCategoryOptions,
  selectIsLoading,
} from '../../../redux/selectors/categoriesSelectors';

import Loader from '../../Loader/Loader';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedCategorySelect = ({ name, onChange }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectCategoryOptions);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Loader padding="0" />;
  }

  return (
    <ConnectedSelect
      name={name}
      options={options}
      placeholder="Select a category"
      onChange={onChange}
    />
  );
};

export default ConnectedCategorySelect;
