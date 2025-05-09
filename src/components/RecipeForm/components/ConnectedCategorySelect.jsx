import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../api/categories';
import {
  selectCategoryOptions,
  selectIsLoading,
} from '../../../redux/selectors/categoriesSelectors';

import Loader from '../../Loader/Loader';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedCategorySelect = ({ name }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectCategoryOptions);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Loader padding='0' />;
  }

  return (
    <ConnectedSelect
      name={name}
      options={options}
      placeholder="Select a category"
      rules={{ required: 'Category is required' }}
    />
  );
};

export default ConnectedCategorySelect;
