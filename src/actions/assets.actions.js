export const ADD_SELECTION = 'ADD_SELECTION';
export const REMOVE_SELECTION = 'REMOVE_SELECTION';

export const addSelection = asset => ({
  type: ADD_SELECTION,
  payload: asset
})

export const removeSelection = asset => ({
  type: REMOVE_SELECTION,
  payload: asset
})