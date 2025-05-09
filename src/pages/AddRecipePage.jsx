import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs.jsx';
import MainTitle from '../components/MainTitle/MainTitle.jsx';
import RecipeForm from '../components/RecipeForm/RecipeForm.jsx';

export default function AddRecipePage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/profile');
  };

  return (
    <>
      <BreadCrumbs breadcrumbs="Add recipe" />
      <section className="section first-section">
        <div className="container">
          <MainTitle
            title="Add recipe"
            subtitle="Reveal your culinary art, share your favorite recipe and create gastronomic masterpieces with us."
          />

          <RecipeForm onSuccess={handleSuccess} />
        </div>
      </section>
    </>
  );
}
