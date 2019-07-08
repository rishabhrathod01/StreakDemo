import { SHOW_MODAL, HIDE_MODAL, TOGGLE_EDITSCREEN } from "./actionTypes";

export const showModal = item => {
  return {
    type: SHOW_MODAL,
    item
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};

export const toggleEditScreen = () => {
  return {
    type: TOGGLE_EDITSCREEN
  };
};
