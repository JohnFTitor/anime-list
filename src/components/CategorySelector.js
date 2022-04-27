import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../redux/pageDetails/pageDetails';

const CategorySelector = (props) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.pageDetails);
  const { label } = props;

  const onChangeHandlerCategory = (event) => {
    dispatch(changeCategory(event.target.value));
  };

  return (
    <label htmlFor="category">
      <p>{label}</p>
      <select onChange={onChangeHandlerCategory} name="category" id="category" value={category}>
        <option value="All">All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Suspense">Suspense</option>
        <option value="Romance">Romance</option>
        <option value="Slice of Life">Slice of Life</option>
        <option value="Supernatural">Supernatural</option>
      </select>
    </label>
  );
};

CategorySelector.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CategorySelector;
