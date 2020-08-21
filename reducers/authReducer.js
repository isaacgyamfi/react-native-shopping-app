const authReducer = (authState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...authState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...authState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...authState,
        isSignout: true,
        userToken: null,
      };
  }
};

export default authReducer;
