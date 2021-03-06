export const ADD_EMAIL_ISVALID    = 'ADD_EMAIL_ISVALID';
export const ADD_PASSWORD_ISVALID = 'ADD_PASSWORD_ISVALID';
export const CLEAR_DATA_FROM_LS   = 'CLEAR_DATA_FROM_LS';

export const inputEmailIsValid = (email) => {
  return {
    type: ADD_EMAIL_ISVALID,
    payload: {email}
  }
};

export const inputPasswordIsValid = (password) => {
  return {
    type: ADD_PASSWORD_ISVALID,
    payload: {password}
  }
};

export const logautBtnDeletHandler = () => {
  localStorage.removeItem('loginConfirm');
  return {
    type: CLEAR_DATA_FROM_LS
  }
};