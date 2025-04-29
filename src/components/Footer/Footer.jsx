import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Foodies. All rights reserved.</p>
      </div>
    </footer>
  );
}
