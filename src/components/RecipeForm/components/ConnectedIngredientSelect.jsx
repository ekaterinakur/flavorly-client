import { useSelector } from 'react-redux';
import {
  selectIngredientOptions,
  selectIsLoading,
} from '../../../redux/selectors/ingredientsSelectors';

import Loader from '../../Loader/Loader';
import ConnectedSelect from '../../form/ConnectedSelect/ConnectedSelect';

const ConnectedIngredientSelect = ({ name }) => {
  const isLoading = useSelector(selectIsLoading);
  const options = useSelector(selectIngredientOptions);

  if (isLoading) {
    return <Loader padding='0' />;
  }

  return (
    <ConnectedSelect
      name={name}
      options={options}
      placeholder="Select the ingredient"
      rules={{ required: 'Ingredient is required' }}
    />
  );
};

export default ConnectedIngredientSelect;
