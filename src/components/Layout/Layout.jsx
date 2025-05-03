import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />

      <Toaster />
    </div>
  );
};

export default Layout;
