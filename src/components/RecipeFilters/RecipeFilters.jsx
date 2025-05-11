import Selector from '../Selector/Selector';
import './RecipeFilters.scss';
import {
  selectIngredients,
  selectIsLoading as selectIngredientsLoading,
} from '../../redux/selectors/ingredientsSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAreas,
  selectIsLoading as selectAreasLoading,
} from '../../redux/selectors/areasSelectors.js';
import { fetchIngredients } from '../../api/ingredients.js';
import { fetchAreas } from '../../api/areas.js';
import { useEffect } from 'react';
import {
  setSelectedArea,
  setSelectedIngredients,
} from '../../redux/slices/recipesSlice.js';
import { selectRecipesFilters } from '../../redux/selectors/recipesSelectors.js';

const RecipeFilter = () => {
  const dispatch = useDispatch();

  const ingredientItems = useSelector(selectIngredients);
  const ingredientsLoading = useSelector(selectIngredientsLoading);
  const areasItems = useSelector(selectAreas);
  const areasLoading = useSelector(selectAreasLoading);
  const filters = useSelector(selectRecipesFilters);

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

  const handleSelectIngredients = (name) => {
    dispatch(setSelectedIngredients(name));
  };

  const handleSelectArea = (name) => {
    dispatch(setSelectedArea(name));
  };

  return (
    <div className="selectors-wrapper">
      <Selector
        label="Ingredients"
        listSelector={ingredientItems}
        selectedSelector={filters.ingredients}
        loading={ingredientsLoading}
        onSelect={handleSelectIngredients}
      />

      <Selector
        label="Areas"
        listSelector={areasItems}
        selectedSelector={filters.area}
        loading={areasLoading}
        onSelect={handleSelectArea}
      />
    </div>
  );
};

export default RecipeFilter;
