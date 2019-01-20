import { MENU_TOGGLE, MENU_CLOSE } from './actions';

/**
 * Store state at application boot-up
 */
const initialState = {
  openedMenu: false
};

/**
 * Main application reducer
 * @param {*} state former store store
 * @param {*} action incoming action
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, openedMenu: !state.openedMenu };
    case MENU_CLOSE:
      return { ...state, openedMenu: false };
    default:
      return state;
  }
};

export default rootReducer;
