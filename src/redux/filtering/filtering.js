const CHANCE_TYPE = 'anime-list/filtering/CHANCE_TYPE';

const initialState = {
  type: 'tvAnime',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANCE_TYPE: {
      return { ...state, type: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;

const changeType = (type) => ({
  type: CHANCE_TYPE,
  payload: type,
});

export { changeType };
