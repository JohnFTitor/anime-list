import React from 'react';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import '../styles/navigation.scss';

const Navigation = () => (
  <nav>
    <IoIosArrowBack fill="#fff" />
    <h1> Current Page </h1>
    <div>
      <FaMicrophone fill="#fff" />
      <IoMdSettings fill="#fff" />
    </div>
  </nav>
);

export default Navigation;
