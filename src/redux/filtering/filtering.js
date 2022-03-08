const CHANCE_CATEGORY = 'anime-list/filtering/CHANCE_CATEGORY';
const CHANCE_TYPE = 'anime-list/filtering/CHANCE_TYPE';

const initialState = {
  category: 'All',
  type: 'tv',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANCE_CATEGORY: {
      return { ...state, category: action.payload };
    }
    case CHANCE_TYPE: {
      return { ...state, type: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;

const changeCategory = (category) => ({
  type: CHANCE_CATEGORY,
  payload: category,
});

const changeType = (type) => ({
  type: CHANCE_TYPE,
  payload: type,
});

export { changeCategory, changeType };
