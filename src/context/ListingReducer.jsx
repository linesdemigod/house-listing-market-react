const listingReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "REGISTER":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case "LISTINGS":
      return {
        ...state,
        listings: action.payload.listings,
        loading: false,
      };
    case "SINGLE_LISTING":
      return {
        ...state,
        listing: action.payload.listing,
        loading: false,
      };
    case "USER_LISTINGS":
      return {
        ...state,
        listings: action.payload.listings,
        loading: false,
      };
    case "SEARCH_LISTINGS":
      return {
        ...state,
        listings: action.payload.listings,
        loading: false,
      };
    case "CREATE_LISTING":
      return {
        ...state,
        listing: action.payload.listing,
        loading: false,
      };
    case "EDIT_LISTING":
      return {
        ...state,
        listing: action.payload.listing,
        loading: false,
      };
    case "UPDATE_LISTING":
      return {
        ...state,
        listing: action.payload.listing,
        loading: false,
      };
    case "DELETE_LISTING":
      const updatedListings = state.listings.filter(
        listing => listing.id !== action.payload.id
      );
      return {
        ...state,
        listings: updatedListings,
        loading: false,
      };
    case "CONTACT":
      return {
        ...state,
      };
    case "FILTER_LISTING":
      return {
        ...state,
        listings: action.payload.data,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_ERROR":
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};

export default listingReducer;
