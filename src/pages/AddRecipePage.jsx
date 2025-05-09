import MainTitle from '../components/MainTitle/MainTitle.jsx';
import RecipeForm from '../components/RecipeForm/RecipeForm.jsx';

export default function AddRecipePage() {
  return (
    <section className="section">
      <div className="container main-container">
        <MainTitle
          title="Add recipe"
          subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          breadcrumbs="Add recipe"
        />

        <RecipeForm />
      </div>
    </section>
  );
}
