export const ADD_EMAIL     = 'ADD_EMAIL';
export const ADD_PASSWORD  = 'ADD_PASSWORD';
export const LOGIN_SBMT    = 'LOGIN_SBMT';
export const EMAIL_ISVALID    = 'EMAIL_ISVALID';
export const PASSWORD_ISVALID    = 'PASSWORD_ISVALID';

export const inputAddEmailHandler = (email) => {
  return {
    type: ADD_EMAIL,
    payload: {email}
  }
};

export const inputAddPasswordHandler = (password) => {
  return {
    type: ADD_PASSWORD,
    payload: {password}
  }
};

export const inputEmailIsValid = () => {
  return {
    type: EMAIL_ISVALID,
  }
};

export const inputPasswordIsValid = () => {
  return {
    type: PASSWORD_ISVALID
  }
};

export const logInSbmtHandler = (event) => {
  event.stopPropagation();
  return {
    type: LOGIN_SBMT
  }
};