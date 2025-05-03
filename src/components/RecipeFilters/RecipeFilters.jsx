import Selector from '../Selector/Selector';
import './RecipeFilters.scss';
import {
  changeIngredient,
  selectIngredients,
} from '../../redux/slices/ingredientsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeArea, selectAreas } from '../../redux/slices/areasSlice.js';
import { fetchIngredients } from '../../api/ingredients.js';
import { fetchAreas } from '../../api/areas.js';
import { useEffect } from 'react';

const RecipeFilter = () => {
  const dispatch = useDispatch();

  const ingredients = useSelector(selectIngredients);
  const areas = useSelector(selectAreas);

  useEffect(() => {
    if (ingredients.items.length === 0) {
      dispatch(fetchIngredients());
    }
  }, [ingredients, dispatch]);

  useEffect(() => {
    if (areas.items.length === 0) {
      dispatch(fetchAreas());
    }
  }, [areas, dispatch]);

  return (
    <div className="selectors-wrapper">
      <Selector
        label="Ingredients"
        listSelector={ingredients.items}
        selectedSelector={ingredients.selected}
        reducer={changeIngredient}
        loading={ingredients.loading}
      />
      <Selector
        label="Areas"
        listSelector={areas.items}
        selectedSelector={areas.selected}
        reducer={changeArea}
        loading={areas.loading}
      />
    </div>
  );
};

export default RecipeFilter;
