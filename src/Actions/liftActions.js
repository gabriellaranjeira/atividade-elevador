import { AVALIABLE, LIFT } from './actionTypes';

export const lift = (event) => dispatch => {
  const name = event.target.getAttribute('name');
  dispatch({ type: LIFT, name, color: 'red'});
}

export const avaliable = (color) => dispatch => {
  dispatch({ type: AVALIABLE, color });
}