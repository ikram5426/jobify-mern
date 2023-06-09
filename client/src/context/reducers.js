import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
const reducer = (state, { type }) => {
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
  throw new Error(`No such action : ${type}`);
};

export default reducer;
