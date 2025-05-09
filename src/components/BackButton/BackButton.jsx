import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './BackButton.scss';

const BackButton = ({ backUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (backUrl) {
      navigate(backUrl);
    } else {
      navigate(-1);
    }
  };

  return (
    <button type="button" className="back-button" onClick={handleClick}>
      <Icon name="arrow-left" size={16} className="back-button__icon" />
      <span className="back-button__text">Back</span>
    </button>
  );
};

export default BackButton;
