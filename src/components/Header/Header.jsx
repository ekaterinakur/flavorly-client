import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          foodies
        </Link>

        <nav className="navbar">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
