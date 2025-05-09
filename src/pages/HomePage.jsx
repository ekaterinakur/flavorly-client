import HeroSection from '../components/HeroSection/HeroSection';
import { Recipes } from '../components/Recipes/Recipes';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <HeroSection />
        <CategoryList />
        <Recipes />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
