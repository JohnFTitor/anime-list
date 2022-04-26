import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import SettingsMenu from './SettingsMenu';

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { currentPage } = useSelector((state) => state.pageDetails);

  const clickHandler = () => {
    setMenuActive(true);
  };

  return (
    <nav>
      <Link to="/">
        <IoIosArrowBack fill="#fff" />
      </Link>
      <h1>{currentPage}</h1>
      <div>
        <button onClick={clickHandler} type="button" data-testid="settings">
          <IoMdSettings fill="#fff" />
        </button>
      </div>
      { menuActive && <SettingsMenu setMenu={setMenuActive} /> }
    </nav>
  );
};

export default Navigation;
