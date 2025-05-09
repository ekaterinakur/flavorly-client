import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../api/categories';
import {
  selectCategoryOptions,
  selectIsLoading,
} from '../../../redux/selectors/categoriesSelectors';

import Spinner from '../../Spinner/Spinner';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedCategorySelect = ({ name }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectCategoryOptions);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ConnectedSelect
      name={name}
      options={options}
      placeholder="Select a category"
      rules={{ required: 'Category is required' }}
      maxWidth="315px"
    />
  );
};

export default ConnectedCategorySelect;
