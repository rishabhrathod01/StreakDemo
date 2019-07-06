import { UPDATE_LIST, SET_CURRENT_WATCHLIST } from "./actionTypes";

export const updateList = newWatchList => {
  return {
    type: UPDATE_LIST,
    newWatchList
  };
};

export const setCurrentWatchList = key => {
  return {
    type: SET_CURRENT_WATCHLIST,
    key
  };
};
