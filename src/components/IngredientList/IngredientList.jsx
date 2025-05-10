import classNames from 'classnames';
import IngredientCard from '../IngredientCard/IngredientCard';

import styles from './IngredientList.module.scss';

const IngredientList = ({ items, className, onDelete }) => {
  if (!items || !items.length) return null;

  return (
    <ul className={classNames(styles.ingredientList, className)}>
      {items.map((item, idx) => (
        <li key={item.id}>
          <IngredientCard
            ingredient={item}
            onDelete={onDelete ? () => onDelete(idx) : undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
