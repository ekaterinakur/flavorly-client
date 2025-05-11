import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CategoryCard.module.scss';
import { IconButton } from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { all } from 'axios';


export function CategoryCard({ id, name, imageUrl, onSelect }) {
  const handleSelect= () => onSelect(id === 'all' ? id : name);

  const isAll = !imageUrl;

  return (
    <div
      className={classNames(styles.card, { [styles.all]: isAll })}
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      aria-label={`Перейти до рецептів категорії ${name}`}
    >
      {imageUrl && <img src={imageUrl} alt={name} className={styles.image} />}
      <span className={styles.name}>{children }</span>

      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
          <IconButton onClick={handleSelect} className={styles.iconButton}>
            <Icon name="arrow-up-right" size={18} color="#fff" />
          </IconButton>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

CategoryCard.defaultProps = {
  imageUrl: null,
};
