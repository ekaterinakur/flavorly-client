import { useSelector } from 'react-redux';
import HeroSection from '../components/HeroSection/HeroSection';
import { Recipes } from '../components/Recipes/Recipes';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import { selectRecipesCategory } from '../redux/selectors/recipesSelectors.js';

const HomePage = () => {
  const selectedCategory = useSelector(selectRecipesCategory);

  return (
    <div className="main-container">
      <HeroSection />
      {selectedCategory ? <Recipes /> : <CategoryList />}
      <Testimonials />
    </div>
  );
};

export default HomePage;
