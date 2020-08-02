export default (state, action) => {
  switch (action.type) {
    case 'GET_LAST_MADD':
      return {
        ...state,
        lastUpdete: action.payload,
      };
    case 'BASIS_MADD':
      return {
        ...state,
        basis: action.payload,
      };
    default:
      return state;
  }
};
