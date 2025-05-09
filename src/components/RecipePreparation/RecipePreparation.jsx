import classNames from 'classnames';
import styles from './RecipePreparation.module.scss';
import Button from '../Button/Button';

export function RecipePreparation({ preparation }) {
  return preparation.split('\n').map((line, index) => (
    <p
      key={index}
      className={classNames(styles.preparation, {
        [styles.preparationSpace]: index !== 0,
      })}
    >
      {line}
      <br />
    </p>
  ));
}
