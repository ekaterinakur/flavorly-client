import Button from '../components/Button/Button';
import { RecipeList } from '../components/RecipeList/RecipeList';
import Loader from '../components/Loader/Loader';
import { RECIPES_LIST } from '../mocks/recipes-list';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

export default function HomePage() {
  return (
    <>
      <div className="container main-container">
        <h1>Welcome to the Recipe App</h1>
        <Button size="small">SIGN IN</Button>

        <RecipeList items={RECIPES_LIST} />

        <Testimonials/>
      </div>
    </>
  );
}
