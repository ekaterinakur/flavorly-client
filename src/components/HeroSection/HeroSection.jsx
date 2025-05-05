import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import './HeroSection.scss';
import { selectIsLoggedIn } from '../../redux/selectors/authSelectors.js';
import { openSignUpModal } from '../../redux/slices/modalSlice.js'; 


const HeroSection = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch(); 

  return (
    <section className="hero-section section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Improve Your Culinary Talents</h1>
          <h2 className="hero-subtitle">
            Amazing recipes for beginners in the world of cooking, enveloping
            you in the aromas and tastes of various cuisines.
          </h2>

          {isLoggedIn ? (
            <Link to="/recipe/add">
              <Button
                variant="white-border"
                size="add-recipe"
                className="hero-btn"
              >
                Add recipe
              </Button>
            </Link>
          ) : (
            <Button
              variant="white-border"
              size="add-recipe"
              className="hero-btn"
              onClick={() => dispatch(openSignUpModal())}
            >
              Add recipe
            </Button>
          )}

          <div className="hero-img">
            <img
              className="hero-img-desert"
              src="/HeroImg/sub_main_img.webp"
              srcSet="/HeroImg/sub_main_img@2x.webp 2x"
              alt="desert photo"
            />
            <img
              className="hero-img-dish"
              src="/HeroImg/main_img.webp"
              srcSet="/HeroImg/main_img@2x.webp 2x"
              alt="desert photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
