import { SET_GESTURE, SET_FINGER_LOCX } from "./gesture.types";

const initialState = {
  gesture: null,
};

const gestureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GESTURE:
      return { ...state, gesture: action.payload };
    case SET_FINGER_LOCX:
      return { ...state, finger_locx: action.payload };
    default:
      return state;
  }
};

export default gestureReducer;
