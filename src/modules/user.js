export const SIGNUP_STATE = 'TOKEN/STATE';

export const handleSignUpState = (token) => ({ type: SIGNUP_STATE, token });

const initialState = {
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_STATE:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default userReducer;
