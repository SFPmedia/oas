const initialState = {
  activities: [],
  activitiesNU: [],
  userSearch: "  Name",
  searchInput: "name",
  searchSelectVisibleStatus: false,
  positionAccuracy: null,
};

// In Redux, "store" will dispatch action objects to one or more reducer functions
// It is Reducer that does the core job of executing the action

// Remember that reducers have to be pure functions, in order to achieve state predictability
// Do not include API calls, usage tracking metrics and other actions that could introduce side effects

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COOKIECONSENTSTATUS":
      return {
        ...state,
        cookieConsentChoiceMade: action.payload,
      };
    case "SET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "SET_ACTIVITIESNU":
      return {
        ...state,
        activitiesNU: action.payload,
      };
    case "SET_USERSEARCH":
      return {
        ...state,
        userSearch: action.payload,
      };
    case "SET_SEARCHINPUT":
      return {
        ...state,
        searchInput: action.payload,
      };
    case "SET_SEARCHSELECTVISIBLESTATUS":
      return {
        ...state,
        searchSelectVisibleStatus: action.payload,
      };
    case "SET_POSITIONACCURACY":
      return {
        ...state,
        positionAccuracy: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
