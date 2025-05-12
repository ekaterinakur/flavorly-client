import './AcceptionModal.scss';
import Button from '../Button/Button';

const AcceptionModal = ({ onClose, onSignIn }) => {
  return (
    <div className="acception-modal">
      <p className="acception-modal-text">
        Sign in now to start using your account!
      </p>
      <div className="acception-modal-btns">
        <Button variant="outline" size="medium" onClick={onClose}>
          Cancel
        </Button>
        <Button size="medium" onClick={onSignIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default AcceptionModal;
