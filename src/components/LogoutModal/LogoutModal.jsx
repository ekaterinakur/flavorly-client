import Button from '../Button/Button';
import './LogoutModal.scss';

const LogoutModal = ({ handleLogoutCLose, onLogout }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <h2 className="modal-question">Log Out</h2>
        <h2 className="modal-question-tablet">Are you logging out?</h2>
        <p className="modal-text">You can always log back in at any time.</p>
      </div>
      <div className="modal-buttons">
        <Button size="large" className="logout-btn" onClick={onLogout}>
          Log out
        </Button>
        <Button variant="outline" size="large" onClick={handleLogoutCLose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default LogoutModal;
