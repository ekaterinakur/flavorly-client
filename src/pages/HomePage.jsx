import { RecipeList } from '../components/RecipeList/RecipeList';
import { RECIPES_LIST } from '../mocks/recipes-list';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

export default function HomePage() {
  return (
    <>
      <div className="container main-container">
        <RecipeList items={RECIPES_LIST} />

        <Testimonials/>
      </div>
    </>
  );
}
