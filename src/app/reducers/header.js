const scrollChange = (state = {}, action) => {
  switch (action.type) {
    case 'SCROLL_CHANGE':
      return { ...state, scrollTop: action.scrollTop };
    default:
      return state
  }
};
export default scrollChange;
