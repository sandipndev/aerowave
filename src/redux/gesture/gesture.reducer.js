import { SET_GESTURE, SET_FINGER_LOCX, SET_LOADED } from "./gesture.types";

const initialState = {
  gesture: null,
  finger_locx: null,
  loaded: false,
};

const gestureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GESTURE:
      return { ...state, gesture: action.payload };
    case SET_FINGER_LOCX:
      return { ...state, finger_locx: action.payload };
    case SET_LOADED:
      return { ...state, loaded: true };
    default:
      return state;
  }
};

export default gestureReducer;
