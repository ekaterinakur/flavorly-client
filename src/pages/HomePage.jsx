import Button from '../components/Button/Button';
import HeroSection from '../components/HeroSection/HeroSection';
import Loader from '../components/Loader/Loader';
import { RecipeList } from '../components/RecipeList/RecipeList';
import { RECIPES_LIST } from '../mocks/recipes-list';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import { CATEGORIES_LIST } from '../mocks/categories';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <HeroSection />
        <CategoryList items={CATEGORIES_LIST} />
        <RecipeList items={RECIPES_LIST} />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
