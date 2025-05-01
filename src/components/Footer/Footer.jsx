import { Link } from 'react-router-dom';
import Icon from '../components/Icon/icon.jsx'; 
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <Link to="/" className="footer-logo">
          foodies
        </Link>

        <ul className="footer-socials">
          <li>
            <a
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon name="facebook" size={20} color="#050505" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon name="instagram" size={20} color="#050505" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Icon name="youtube" size={20} color="#050505" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-low container">
        <hr className="footer-divider" />
        <p className="footer-copy">
          © 2024, Foodies. All rights reserved
        </p>
      </div>

    </footer>
  );
}