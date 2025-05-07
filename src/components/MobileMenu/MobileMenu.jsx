import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu = ({ onClose }) => {
  return (
    <div className="container modal-menu">
      <div className="container modal-menu__content">
        <div className="modal-menu__header">
          <Link to="/" className="modal-menu__logo">
            foodies
          </Link>
          <button className="modal-menu__close" onClick={onClose}>
            <svg className="modal-menu__icon" width="28" height="28">
              <use href="/icons.svg#icon-cross" />
            </svg>
          </button>
        </div>

        <nav className="modal-menu__nav">
          <Link to="/" onClick={onClose}>
            HOME
          </Link>
          <Link to="/recipe/add" onClick={onClose}>
            ADD RECIPE
          </Link>
        </nav>

        <div className="modal-img">
          <img
            className="modal-img-desert"
            src="/HeroImg/sub_main_img.webp"
            srcSet="/HeroImg/sub_main_img@2x.webp 2x"
            alt="desert photo"
          />
          <img
            className="modal-img-dish"
            src="/HeroImg/main_img.webp"
            srcSet="/HeroImg/main_img@2x.webp 2x"
            alt="desert photo"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
