import { MainTitle } from '../../components/MainTitle/MainTitle.jsx';
import Button from '../../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="section not-found">
      <div className="container">
        <MainTitle title="404" />
        <h2 className="not-found-subtitle">Page Not Found ;(</h2>
        <p className="not-found-text">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/">
          <Button variant="outline" size="add-recipe">
            Go Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
