import { SET_GESTURE, SET_FINGER_LOCX } from "./gesture.types";

export const setGesture = (gesture) => ({
  type: SET_GESTURE,
  payload: gesture,
});

export const setFingerLocx = (locs) => ({
  type: SET_FINGER_LOCX,
  payload: locs,
});
