import IngredientCard from '../IngredientCard/IngredientCard';

import styles from './IngredientList.module.scss';

const IngredientList = ({ items, onDelete }) => {
  return (
    <ul className={styles.previewList}>
      {items.map((item, idx) => (
        <li key={item.id}>
          <IngredientCard ingredient={item} onDelete={() => onDelete(idx)} />
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
