import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <button type="button" className="back-button" onClick={handleClick}>
      <svg className="back-button__icon" width="16" height="16">
        <use xlinkHref="/icons.svg#icon-arrow-left" />
      </svg>
      <span className="back-button__text">Back</span>
    </button>
  );
};

export default BackButton;
