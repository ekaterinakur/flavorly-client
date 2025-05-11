import HeroSection from '../components/HeroSection/HeroSection';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import { CATEGORIES_LIST } from '../mocks/categories';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <HeroSection />
        <CategoryList items={CATEGORIES_LIST} />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
