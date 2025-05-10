import Selector from '../Selector/Selector';
import './RecipeFilters.scss';
import { changeIngredient } from '../../redux/slices/ingredientsSlice.js';
import { selectIngredients } from '../../redux/selectors/ingredientsSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeArea } from '../../redux/slices/areasSlice.js';
import { selectAreas } from '../../redux/selectors/areasSelectors.js';
import { fetchIngredients } from '../../api/ingredients.js';
import { fetchAreas } from '../../api/areas.js';
import { useEffect } from 'react';

const RecipeFilter = () => {
  const dispatch = useDispatch();

  const ingredientItems = useSelector(selectIngredients);
  const ingredientsState = useSelector((state) => state.ingredients);

  const areasItems = useSelector(selectAreas);
  const areasState = useSelector((state) => state.areas);

  useEffect(() => {
    if (ingredientItems.length === 0) {
      dispatch(fetchIngredients());
    }
  }, [ingredientItems, dispatch]);

  useEffect(() => {
    if (areasItems.length === 0) {
      dispatch(fetchAreas());
    }
  }, [areasItems, dispatch]);

  return (
    <div className="selectors-wrapper">
      <Selector
        label="Ingredients"
        listSelector={ingredientItems}
        selectedSelector={ingredientsState.selected}
        reducer={changeIngredient}
        loading={ingredientsState.loading}
      />

      <Selector
        label="Areas"
        listSelector={areasItems}
        selectedSelector={areasState.selected}
        reducer={changeArea}
        loading={areasState.loading}
      />
    </div>
  );
};

export default RecipeFilter;
