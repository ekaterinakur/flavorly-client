import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../../api/ingredients.js';
import {
  setSelectedArea,
  setSelectedIngredients,
} from '../../redux/slices/recipesSlice.js';
import ConnectedIngredientSelect from '../RecipeForm/components/ConnectedIngredientSelect.jsx';
import ConnectedAreaSelect from '../RecipeForm/components/ConnectedAreaSelect.jsx';

import './RecipeFilters.scss';

const RecipeFilter = () => {
  const dispatch = useDispatch();

  const form = useForm();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleSelectIngredients = (id) => {
    dispatch(setSelectedIngredients(id));
  };

  const handleSelectArea = (name) => {
    dispatch(setSelectedArea(name));
  };

  return (
    <FormProvider {...form}>
      <div className="selectors-wrapper">
        <ConnectedAreaSelect
          name="area"
          placeholder="Area"
          onChange={handleSelectArea}
        />
        <ConnectedIngredientSelect
          name="ingredient"
          placeholder="Ingredient"
          onChange={handleSelectIngredients}
        />
      </div>
    </FormProvider>
  );
};

export default RecipeFilter;
