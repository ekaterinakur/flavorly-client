import { Toaster } from 'react-hot-toast';
import { selectIsRefreshing } from '../../redux/selectors/authSelectors';
import { useSelector } from 'react-redux';

import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader'

const Layout = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <div className="loader-container">
      <Loader />
    </div>
  ) : (
    <div className="main-layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
