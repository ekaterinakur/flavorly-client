import Selector from '../Selector/Selector';
import './RecipeFilters.scss';
import { changeIngredient } from '../../redux/slices/ingredientsSlice.js';
import {
  getIngredients,
  selectIngredient,
} from '../../redux/slices/ingredientsSlice';
import { useSelector } from 'react-redux';
import { getAreas, selectArea } from '../../redux/slices/areasSlice.js';

const RecipeFilter = () => {
  return (
    <div className="selectors-wrapper">
      <Selector
        label="Ingredients"
        listSelector={useSelector(getIngredients)}
        selectedSelector={useSelector(selectIngredient)}
        reducer={changeIngredient}
      />
      <Selector
        label="Areas"
        listSelector={useSelector(getAreas)}
        selectedSelector={useSelector(selectArea)}
        reducer={changeIngredient}
      />
    </div>
  );
};

export default RecipeFilter;
