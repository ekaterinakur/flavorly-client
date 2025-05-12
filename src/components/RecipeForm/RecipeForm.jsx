import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { createRecipe } from '../../api/recipes';
import { selectRecipesLoading } from '../../redux/selectors/recipesSelectors';
import { recipeSchema } from '../../validation/recipeSchema';
import ConnectedFileUploader from '../form/ConnectedFileUploader/ConnectedFileUploader';
import ConnectedTitleInput from '../form/ConnectedTitleInput/ConnectedTitleInput';
import ConnectedTextArea from '../form/ConnectedTextArea/ConnectedTextArea';
import ConnectedCategorySelect from './components/ConnectedCategorySelect';
import ConnectedAreaSelect from './components/ConnectedAreaSelect';
import ConnectedTimeSelect from './components/ConnectedTimeSelect/ConnectedTimeSelect';
import IngredientsFieldsArray from './components/IngredientsFieldsArray';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import Loader from '../Loader/Loader';

import styles from './RecipeForm.module.scss';

const initialValues = {
  thumb: '',
  title: '',
  description: '',
  instructions: '',
  time: '10',
  category: '',
  area: '',
  ingredients: [],
  currentIngredient: {
    id: '',
    measure: '',
  },
};

const RecipeForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectRecipesLoading);

  const form = useForm({
    resolver: yupResolver(recipeSchema),
    mode: 'onBlur',
    defaultValues: initialValues,
  });

  const onSubmit = async (data) => {
    if (isLoading) return;

    const resultAction = await dispatch(createRecipe(data));

    if (createRecipe.fulfilled.match(resultAction)) {
      form.reset();
      toast.success('The recipe created successfully!');
      onSuccess();
    } else {
      toast.error(resultAction.payload || 'Failed to create the recipe.');
    }
  };

  const onError = (errors) => {
    const firstErrorField = Object.keys(errors)[0];
    const el = document.querySelector(`[name="${firstErrorField}"]`);

    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus?.();
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className={styles.recipeForm}
        onSubmit={form.handleSubmit(onSubmit, onError)}
      >
        <div className={styles.leftSection}>
          <ConnectedFileUploader name="thumb" />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.mb1}>
            <ConnectedTitleInput
              name="title"
              placeholder="THE NAME OF THE RECIPE"
            />
          </div>
          <div className={styles.mb2}>
            <ConnectedTextArea
              name="description"
              placeholder="Enter a description of the dish"
              maxLength={200}
            />
          </div>

          <div className={styles.mb1}>
            <h6 className={styles.sectionTitle}>Area</h6>
            <ConnectedAreaSelect name="area" />
          </div>

          <div className={classNames(styles.categoryRow, styles.mb2)}>
            <div className={styles.categoryCol}>
              <h6 className={styles.sectionTitle}>Category</h6>
              <ConnectedCategorySelect name="category" />
            </div>

            <div className={styles.timeCol}>
              <h6 className={styles.sectionTitle}>Cooking time</h6>
              <ConnectedTimeSelect name="time" />
            </div>
          </div>

          <div className={styles.mb4}>
            <h6 className={styles.sectionTitle}>Ingredients</h6>
            <IngredientsFieldsArray name="ingredients" />
          </div>

          <div className={styles.mb3}>
            <h6 className={classNames(styles.sectionTitle, styles.mb1)}>
              Recipe Preparation
            </h6>
            <ConnectedTextArea
              name="instructions"
              placeholder="Enter recipe"
              maxLength={200}
            />
          </div>

          <div className={styles.formActions}>
            <IconButton
              className={styles.resetBtn}
              onClick={() => form.reset()}
            >
              <Icon name="trash" size="20px" />
            </IconButton>

            <Button
              type="submit"
              variant="filled"
              size="medium"
              disabled={
                isLoading ||
                form.formState.isSubmitting ||
                form.formState.isSubmitted
              }
            >
              Publish
            </Button>

            {isLoading && <Loader padding="0" />}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default RecipeForm;
