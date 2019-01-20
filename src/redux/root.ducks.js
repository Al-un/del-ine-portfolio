export const MENU_TOGGLE = 'MENU_TOGGLE';
export const MENU_CLOSE = 'MENU_CLOSE';

/**
 * Store state at application boot-up
 */
const initialState = {
  showMenu: false
};

/**
 * Main application reducer
 * @param {*} state former store store
 * @param {*} action incoming action
 */
const rootReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, showMenu: !state.showMenu };
    case MENU_CLOSE:
      return { ...state, showMenu: false };
    default:
      return state;
  }
};

export default rootReducer;

/**
 * Toggle full screen menu
 */
export const toggleMenu = () => ({ type: MENU_TOGGLE });

/**
 * Close full screen menu
 */
export const closeMenu = () => ({ type: MENU_CLOSE });
