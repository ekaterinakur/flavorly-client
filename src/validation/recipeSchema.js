import * as Yup from 'yup';

export const recipeSchema = Yup.object().shape({
  thumb: Yup.mixed().required('Image is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string()
    .max(200, 'Description must be at most 200 characters')
    .nullable(),
  instructions: Yup.string()
    .max(200, 'Instructions must be at most 200 characters')
    .nullable(),
  time: Yup.string().required('Time is required'),
  category: Yup.string().required('Category is required'),
  area: Yup.string().required('Area is required'),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required('Ingredient ID is required'),
        measure: Yup.string().required('Measure is required'),
      })
    )
    .min(1, 'At least one ingredient is required')
    .required('Ingredients are required'),
});
