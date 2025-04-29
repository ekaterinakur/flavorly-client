import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
