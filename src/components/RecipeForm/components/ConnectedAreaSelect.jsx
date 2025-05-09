import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAreas } from '../../../api/areas';
import { selectAreaOptions, selectIsLoading } from '../../../redux/selectors/areasSelectors';

import Spinner from '../../Spinner/Spinner';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedAreaSelect = ({ name }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectAreaOptions);

  useEffect(() => {
    dispatch(fetchAreas());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ConnectedSelect
			name={name}
      options={options}
			defaultValue="Unknown"
      placeholder="Select an area"
      rules={{ required: 'Area is required' }}
			maxWidth='315px'
    />
  );
};

export default ConnectedAreaSelect;
