import HeroSection from '../components/HeroSection/HeroSection';
// import { RecipeList } from '../components/RecipeList/RecipeList';
// import { RECIPES_LIST } from '../mocks/recipes-list';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import { CATEGORIES_LIST } from '../mocks/categories';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import { useDispatch } from 'react-redux';
import { loginUser } from '../api/login.js';
import { registerUser } from '../api/register.js';

const HomePage = () => {
  // Temporary
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(
      loginUser({
        email: 'test@gmail.com',
        password: '123456',
      })
    );
  };

  const handleClickRegister = (event) => {
    event.preventDefault();

    dispatch(
      registerUser({
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
      })
    );
  };

  // Temporary

  return (
    <>
      <div className="main-container">
        <button type="button" onClick={handleClick}>
          LOGIN
        </button>
        <button type="button" onClick={handleClickRegister}>
          Register
        </button>

        <HeroSection />
        <CategoryList items={CATEGORIES_LIST} />
        {/* <RecipeList items={RECIPES_LIST} /> */}
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
