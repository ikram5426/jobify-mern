import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_FAIL,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
} from "./actions";
const reducer = (state, { type ,payload}) => {
  if (type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (type === REGISTER_USER_START) {
    return { ...state, isLoading: true };
  }
  if (type === REGISTER_USER_SUCCESS) {
    return {
      ...state, 
      isLoading: false,
      token: payload.token,
      user: payload.user,
      userLocation: payload.location,
      jobLocation: payload.location,
      showAlert: true,
      alertText: "User created successfully ! Redirecting....",
      alertType:'success'
    };
  }
if(type===REGISTER_USER_FAIL){
  return {
    ...state,
    showAlert:true,
    isLoading:false,
    alertType:'danger',
    alertText:payload.msg
  }
}
  throw new Error(`No such action : ${type}`);
};

export default reducer;
