export const ADD_EMAIL     = 'ADD_EMAIL';
export const ADD_PASSWORD  = 'ADD_PASSWORD';
export const LOGIN_SBMT    = 'LOGIN_SBMT';

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

export const logInSbmtHandler = (event) => {
  return {
    type: LOGIN_SBMT
  }
};