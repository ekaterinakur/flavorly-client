import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.jsx';
import MainTitle from '../components/MainTitle/MainTitle.jsx';
import RecipeForm from '../components/RecipeForm/RecipeForm.jsx';

export default function AddRecipePage() {
  return (
    <>
      <BreadCrumbs breadcrumbs="Add recipe" />
      <section className="section">
        <div className="container">
          <MainTitle
            title="Add recipe"
            subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          />

          <RecipeForm />
        </div>
      </section>
    </>
  );
}
