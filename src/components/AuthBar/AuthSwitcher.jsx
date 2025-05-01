import { useState } from 'react';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import './AuthSwitcher.scss';

const AuthSwitcher = () => {
  const [authMode, setAuthMode] = useState('signIn');

  return (
    <div className="auth-switcher">
      <div className="switcher">
        <button
          type="button"
          className={authMode === 'signIn' ? 'active' : ''}
          onClick={() => setAuthMode('signIn')}
        >
          SIGN IN
        </button>
        <button
          type="button"
          className={authMode === 'signUp' ? 'active' : ''}
          onClick={() => setAuthMode('signUp')}
        >
          SIGN UP
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {authMode === 'signIn' ? (
          <SignInModal onSwitch={() => setAuthMode('signUp')} />
        ) : (
          <SignUpModal onSwitch={() => setAuthMode('signIn')} />
        )}
      </div>
    </div>
  );
};

export default AuthSwitcher;
