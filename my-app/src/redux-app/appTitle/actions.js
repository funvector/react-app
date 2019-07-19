export const CHANGE_TITLE    = 'CHANGE_TITLE';

export const titleChangeHandler = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
};