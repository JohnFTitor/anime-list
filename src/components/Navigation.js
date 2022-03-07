import React from 'react';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';

const Navigation = () => (
  <nav>
    <Link to="/">
      <IoIosArrowBack fill="#fff" />
    </Link>
    <h1> Current Page </h1>
    <div>
      <button type="button">
        <FaMicrophone fill="#fff" />
      </button>
      <button type="button">
        <IoMdSettings fill="#fff" />
      </button>
    </div>
  </nav>
);

export default Navigation;
