import { createContext, useReducer } from "react";
import ListingReducer from "./ListingReducer";
import http from "./ListingAction";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    user: {},
    token: null,
    error: true,
    listings: [],
    listing: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ListingReducer, initialState);

  // set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  //get errors
  const getError = () =>
    dispatch({
      type: "GET_ERROR",
    });

  const filterListing = data => {
    dispatch({
      type: "FILTER_LISTING",
      payload: data,
    });
  };

  //login
  const login = async formData => {
    try {
      const response = await http.post(`/login`, formData);

      const data = response.data;

      dispatch({
        type: "LOGIN",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //sign up
  const register = async formData => {
    try {
      const response = await http.post(`/register`, formData);

      const data = response.data;

      dispatch({
        type: "REGISTER",
        payload: data,
      });
    } catch (error) {
      getError(true);
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const response = await http.post(`/logout`);

      const data = response.data;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error.request);
    }
  };

  //get all listings
  const getListings = async () => {
    setLoading();
    try {
      const response = await http.get(`/listings`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      dispatch({
        type: "LISTINGS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get single listing
  const getListing = async id => {
    setLoading();
    try {
      const response = await http.get(`/listings/${id}`);

      const data = response.data;

      dispatch({
        type: "SINGLE_LISTING",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //search for listing
  const searchListings = async address => {
    setLoading();
    try {
      const response = await http.get(`/search`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          q: address,
        },
      });

      const data = response.data;

      dispatch({
        type: "SEARCH_LISTINGS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //create a post
  const createListing = async formData => {
    setLoading();
    try {
      const response = await http.post(`/listings`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data;

      dispatch({
        type: "CREATE_LISTING",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserListings = async id => {
    setLoading();
    try {
      const response = await http.get(`/user-listings/${id}`);

      const data = response.data;

      dispatch({
        type: "USER_LISTINGS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editListing = async id => {
    setLoading();
    try {
      const response = await http.get(`/listings/${id}/edit`);

      const data = response.data;

      dispatch({
        type: "EDIT_LISTING",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateListing = async (id, formData) => {
    setLoading();
    try {
      const response = await http.post(`/listings/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data;

      dispatch({
        type: "UPDATE_LISTING",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteListing = async id => {
    try {
      const response = await http.delete(`/listings/${id}`);

      const data = response.data;

      dispatch({
        type: "DELETE_LISTING",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const contactAgent = async formData => {
    try {
      const response = await http.post(`/contact`, formData);

      const data = response.data;

      dispatch({
        type: "CONTACT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListingContext.Provider
      value={{
        user: state.user,
        tokn: state.token,
        loading: state.loading,
        listings: state.listings,
        isLastPage: state.isLastPage,
        listing: state.listing,
        error: state.error,
        login,
        register,
        logout,
        setLoading,
        getError,
        getListings,
        getListing,
        getUserListings,
        searchListings,
        createListing,
        editListing,
        updateListing,
        deleteListing,
        filterListing,
        contactAgent,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContext;
