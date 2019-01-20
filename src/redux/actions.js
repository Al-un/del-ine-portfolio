export const MENU_TOGGLE = 'MENU_TOGGLE';
export const MENU_CLOSE = 'MENU_CLOSE';

/**
 * Toggle full screen menu
 */
export function toggleMenu() {
  return { type: MENU_TOGGLE };
}

/**
 * Close full screen menu
 */
export function closeMenu() {
  return { type: MENU_CLOSE };
}
