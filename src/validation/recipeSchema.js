import * as Yup from 'yup';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg'];

export const recipeSchema = Yup.object().shape({
  thumb: Yup.mixed()
    .test('File', 'File is required', (value) => value)
    .test(
      'fileFormat',
      'Only PNG, JPEG, JPG files are allowed',
      (file) => file && SUPPORTED_FORMATS.includes(file.type)
    )
    .test(
      'fileSize',
      'Image must be less than 2MB',
      (file) => file && file.size <= MAX_FILE_SIZE
    ),
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
