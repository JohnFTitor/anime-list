import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeType } from '../redux/pageDetails/pageDetails';

const TypeSelector = (props) => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.pageDetails);
  const { setMenu, label } = props;

  const onChangeHandlerType = (event) => {
    dispatch(changeType(event.target.value));
    setMenu(false);
  };

  return (
    <label htmlFor="type">
      <p>{label}</p>
      <select onChange={onChangeHandlerType} name="type" id="type" value={type} data-testid="typeSelector">
        <option value="tvAnime">Tv</option>
        <option value="movieAnime">Movie</option>
        <option value="specialAnime">Special</option>
        <option value="ovaAnime">Ova</option>
        <option value="onaAnime">Ona</option>
        <option value="musicAnime">Music</option>
      </select>
    </label>
  );
};

TypeSelector.propTypes = {
  setMenu: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TypeSelector;
