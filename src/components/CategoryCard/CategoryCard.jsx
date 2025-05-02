import PropTypes from 'prop-types';
import css from './CategoryCard.module.scss';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/icon';

export function CategoryCard({ id, name, imageUrl, onSelect }) {
  const isAllCategories = !imageUrl;

  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className={`${css.card} ${isAllCategories ? css.allCategories : ''}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      aria-label={`Перейти до рецептів категорії ${name}`}
    >
      {imageUrl && <img src={imageUrl} alt={name} className={css.image} />}

      <div className={css.overlay}>
        <div className={css.content}>
          <span className={css.name}>{name}</span>
          {!isAllCategories && (
            <IconButton onClick={handleClick}>
              <Icon name="arrow-up-right" size={18} color="#ffffff" />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string, // Made optional for "ALL CATEGORIES"
  onSelect: PropTypes.func.isRequired,
};
