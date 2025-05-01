import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SignUpModal from '../SignUpModal/SignUpModal';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(true); // временно true для теста

  const handleClose = () => setShowSignUp(false);
  const handleSwitch = () => alert('Переключение на Sign In');

  return (
    <div className="main-layout">
      <Header />

      <main className="page-content">{children}</main>

      <Footer />

      {showSignUp && (
        <SignUpModal onSuccess={handleClose} onSwitch={handleSwitch} />
      )}

      <Toaster />
    </div>
  );
};

export default Layout;
