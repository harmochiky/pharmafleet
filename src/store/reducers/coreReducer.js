const initialData = {
  authenticated: false,
};

const coreReducer = (state = initialData, actions) => {
  switch (actions.type) {
    case "SET_AUTHENTICATED":
      return {
        ...state,
        authenticated: true,
      };
    case "SET_UNAUTHENTICATED":
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default coreReducer;
