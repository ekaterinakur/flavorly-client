import classNames from 'classnames';
import styles from './RecipePreparation.module.scss';
import Button from '../Button/Button';

export function RecipePreparation({ preparation }) {
  const handleAddToFavorites = () => {
    // Logic to add the recipe to favorites
    console.log('Add to favorites clicked');
  };

  return (
    <>
      {preparation.length ? (
        <>
          {preparation.split('\n').map((line, index) => (
            <p
              key={index}
              className={classNames(styles.preparation, {
                [styles.preparationSpace]: index !== 0,
              })}
            >
              {line}
              <br />
            </p>
          ))}
        </>
      ) : null}

      <Button
        className={styles.button}
        variant="outline"
        onClick={handleAddToFavorites}
      >
        aDD TO fAVORITES
      </Button>
    </>
  );
}
