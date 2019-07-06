import {
  SHOW_MODAL,
  HIDE_MODAL,
  TOGGLE_EDITSCREEN
} from "../actions/actionTypes";

const INITIAL_STATE = {
  item: { name: "Some error", rate: "0" },
  modalVisible: false,
  EditScreenVisible: false
};

const TrackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalVisible: true,
        item: action.item
      };

    case HIDE_MODAL:
      return {
        ...state,
        modalVisible: false,
        item: { name: "Some error", rate: "0" }
      };

    case TOGGLE_EDITSCREEN:
      return {
        ...state,
        EditScreenVisible: !state.EditScreenVisible
      };

    default:
      return state;
  }
};

export default TrackReducer;
