import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeType } from '../redux/filtering/filtering';

const SettingsMenu = (props) => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.filtering);
  const { setMenu } = props;

  const onChangeHandler = (event) => {
    dispatch(changeType(event.target.value));
  };

  return (
    <div className="settings-menu">
      <button type="button" onClick={() => setMenu(false)}>
        X
      </button>
      <form>
        <select onChange={onChangeHandler} name="type" id="type" value={type}>
          <option value="tvAnime">Tv</option>
          <option value="movieAnime">Movie</option>
          <option value="specialAnime">Special</option>
          <option value="ovaAnime">Ova</option>
          <option value="onaAnime">Ona</option>
          <option value="musicAnime">Music</option>
        </select>
      </form>
    </div>
  );
};

SettingsMenu.propTypes = {
  setMenu: PropTypes.func.isRequired,
};

export default SettingsMenu;
