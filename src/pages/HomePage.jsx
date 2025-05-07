import HeroSection from '../components/HeroSection/HeroSection';
// import { RecipeList } from '../components/RecipeList/RecipeList';
// import { RECIPES_LIST } from '../mocks/recipes-list';
import { CategoryList } from '../components/CategoryList/CategoryList.jsx';
import { CATEGORIES_LIST } from '../mocks/categories';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDetails } from '../api/userDetails.js';
import { selectUserDetails } from '../redux/selectors/userDetailsSelectors.js';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetails('681bc3f7de82468ba1d43e61'));
  }, [dispatch]);

  const userDetailsResp = useSelector(selectUserDetails);
  console.log(userDetailsResp);

  return (
    <>
      <div className="main-container">
        <HeroSection />
        <CategoryList items={CATEGORIES_LIST} />
        {/* <RecipeList items={RECIPES_LIST} /> */}
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
