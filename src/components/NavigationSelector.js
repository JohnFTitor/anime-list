import React from 'react';
import CategorySelector from './CategorySelector';
import TypeSelector from './TypeSelector';

const NavigationSelector = () => (
  <form className="nav-selector">
    <TypeSelector setMenu={() => null} label="Type: " />
    <CategorySelector label="Category: " />
  </form>
);

export default NavigationSelector;
