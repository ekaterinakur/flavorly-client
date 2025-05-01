import Button from '../components/Button/Button';
import HeroSection from '../components/HeroSection/HeroSection';
import Loader from '../components/Loader/Loader';
import { RecipeList } from '../components/RecipeList/RecipeList';
import { RECIPES_LIST } from '../mocks/recipes-list';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';

const HomePage = () => {
  return (
    <>
      <div className="container main-container">
        <HeroSection />
        <ListPagination
          totalPages={133}
          page={14}
          onPageChange={(page) => {
            console.log(page);
          }}
        />
        <RecipeList items={RECIPES_LIST} />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
