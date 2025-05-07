import classNames from 'classnames';
import styles from './RecipePreparation.module.scss';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors/authSelectors';
import { openSignInModal } from '../../redux/slices/modalSlice';

export function RecipePreparation({ preparation }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleAddToFavorites = () => {
    console.log('Add to favorites clicked');
    if (isLoggedIn) {
      console.log('add to favorites');
    } else {
      dispatch(openSignInModal());
    }
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
        ADD TO FAVORITES
      </Button>
    </>
  );
}
