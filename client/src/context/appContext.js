import React, { useReducer, useContext } from "react";
import axios from "axios";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "./actions";
import reducer from "./reducers";

const user=localStorage.getItem('user')
const token=localStorage.getItem('token')
const userLocation=localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  user:user?JSON.parse(user): null,
  token: token,
  userLocation:userLocation|| '',
  jobLocation:userLocation||''
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

 const addUserToLocalStorage = ({ user, token, location }) => {
   localStorage.setItem("user", JSON.stringify(user));
   localStorage.setItem("token", token);
   localStorage.setItem("location", location);
 };

 const removeUserFromLocalStorage = () => {
   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("location");
 };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_START });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          location,
          token,
        },
      });
      addUserToLocalStorage({user,token,location})
    } catch (err) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

 

  return (
    <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
