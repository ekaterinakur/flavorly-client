import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
