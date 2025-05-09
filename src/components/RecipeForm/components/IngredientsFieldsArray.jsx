import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { fetchIngredients } from '../../../api/ingredients';
import { selectIngredients } from '../../../redux/selectors/ingredientsSelectors';
import Icon from '../../Icon/Icon';
import Button from '../../Button/Button';
import ConnectedIngredientSelect from './ConnectedIngredientSelect';
import ConnectedInput from '../../form/ConnectedInput/ConnectedInput';
import IngredientList from '../../IngredientList/IngredientList';

import styles from '../RecipeForm.module.scss';

const IngredientsFieldsArray = ({ name }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);

  const { control, watch, setValue } = useFormContext();

  const { append, remove } = useFieldArray({
    control,
    name,
  });

  const selectedIngredients = watch(name) || [];
  const currentIngredient = watch('currentIngredient');

  const [previewList, setPreviewList] = useState([]);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleAdd = () => {
    if (currentIngredient.id && currentIngredient.measure) {
      const ingredient = ingredients.find((i) => i.id === currentIngredient.id);
      if (ingredient) {
        setPreviewList((prev) => [
          ...prev,
          { ...ingredient, measure: currentIngredient.measure },
        ]);
      }

      append(currentIngredient);
      setValue('currentIngredient', { id: '', measure: '' });
    }
  };

  const handleRemove = (idx) => {
    setPreviewList((prev) => prev.filter((_, i) => i !== idx));
    remove(`${name}.${idx}`);
  };

  return (
    <div>
      <div className={styles.ingredientRow}>
        <ConnectedIngredientSelect name={'currentIngredient.id'} />
        <ConnectedInput
          name={'currentIngredient.measure'}
          placeholder="Enter quantity"
          rules={{ required: 'Measure is required' }}
        />
      </div>

      <Button
        type="button"
        onClick={handleAdd}
        variant="outline"
        size="medium"
        className={styles.addIngredientBtn}
        disabled={!(currentIngredient?.id && currentIngredient?.measure)}
      >
        ADD INGREDIENT
        <Icon name="plus" size="1.5rem" />
      </Button>

      <IngredientList items={previewList} onDelete={handleRemove} />
    </div>
  );
};

export default IngredientsFieldsArray;
