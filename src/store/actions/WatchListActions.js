import { UPDATE_LIST } from "./actionTypes";

export const updateList = list => {
  return {
    type: UPDATE_LIST,
    list
  };
};
import { SET_CURRENT_WATCHLIST } from "./actionTypes";

export const setcurrentWatchList = watchList => {
  return {
    type: SET_CURRENT_WATCHLIST,
    watchList
  };
};
