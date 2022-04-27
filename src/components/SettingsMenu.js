import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import TypeSelector from './TypeSelector';
import CategorySelector from './CategorySelector';

const SettingsMenu = (props) => {
  const { setMenu } = props;

  const closeSettings = (event) => {
    const { parentNode } = event.currentTarget;
    parentNode.style.animation = 'slide-out 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) 0s';
    setTimeout(() => {
      setMenu(false);
    }, 400);
  };

  return (
    <div className="settings-menu">
      <button type="button" onClick={closeSettings}>
        <MdClose stroke="#fff" fill="#fff" strokeWidth="1" />
      </button>
      <form>
        <TypeSelector setMenu={setMenu} label="Anime Type" />
        <CategorySelector label="Anime Category" />
      </form>
      <div className="signature">
        <p> Made by JohnFTitor</p>
        <a href="https://github.com/JohnFTitor" target="_blank" rel="noreferrer">
          <AiFillGithub fill="#e8eaf8" />
        </a>
        <a href="https://twitter.com/johnftitor" target="_blank" rel="noreferrer">
          <AiFillTwitterCircle fill="#e8eaf8" />
        </a>
      </div>
    </div>
  );
};

SettingsMenu.propTypes = {
  setMenu: PropTypes.func.isRequired,
};

export default SettingsMenu;
