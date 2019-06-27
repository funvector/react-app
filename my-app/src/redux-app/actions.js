export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_HANDLER = 'TOGGLE_HANDLER';

export const toggleHandler = () => {
  return {
    type: TOGGLE_HANDLER
  }
}

export const titleChangeHandler = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
}