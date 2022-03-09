import React, { useState } from 'react';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import SettingsMenu from './SettingsMenu';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const clickHandler = () => {
    setMenuActive(true);
  };

  return (
    <nav>
      <Link to="/">
        <IoIosArrowBack fill="#fff" />
      </Link>
      <h1> Current Page </h1>
      <div>
        <button type="button">
          <FaMicrophone fill="#fff" />
        </button>
        <button onClick={clickHandler} type="button">
          <IoMdSettings fill="#fff" />
        </button>
      </div>
      { menuActive && <SettingsMenu setMenu={setMenuActive} /> }
    </nav>
  );
};

export default Navigation;
