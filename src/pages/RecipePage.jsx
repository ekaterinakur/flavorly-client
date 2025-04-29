import { useParams } from 'react-router-dom';

export default function RecipePage() {
  const { id } = useParams();

  return <div className="container main-container">Recipe {id}</div>;
}
