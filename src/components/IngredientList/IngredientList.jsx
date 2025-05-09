import IngredientCard from '../IngredientCard/IngredientCard';

import styles from './IngredientList.module.scss';

const IngredientList = ({ items, onDelete }) => {
  return (
    <div className={styles.previewList}>
      {items.map((item, idx) => (
        <IngredientCard
          key={item.id}
          ingredient={item}
          onDelete={() => onDelete(idx)}
        />
      ))}
    </div>
  );
};

export default IngredientList;
