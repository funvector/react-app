export const LOGIN_SBMT           = 'LOGIN_SBMT';
export const ADD_EMAIL_ISVALID    = 'ADD_EMAIL_ISVALID';
export const ADD_PASSWORD_ISVALID = 'ADD_PASSWORD_ISVALID';

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

export const logInSbmtHandler = (event) => {
  return {
    type: LOGIN_SBMT
  }
};