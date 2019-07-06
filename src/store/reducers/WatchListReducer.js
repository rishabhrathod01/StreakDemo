import { UPDATE_LIST, SET_CURRENT_WATCHLIST } from "../actions/actionTypes";

const SAMPLE_LIST = [
  {
    id: 1,
    name: "SBIN",
    rate: 236,
    change: "+23"
  },
  {
    id: 2,
    name: "SBI",
    rate: 236,
    change: "+23"
  },
  {
    id: 3,
    name: "ICICI",
    rate: 236,
    change: "+23"
  },
  {
    id: 4,
    name: "CANARA",
    rate: 236,
    change: "+23"
  },
  {
    id: 5,
    name: "SBIN",
    rate: 236,
    change: "+23"
  },
  {
    id: 6,
    name: "SBI",
    rate: 236,
    change: "+23"
  },
  {
    id: 7,
    name: "ICICI",
    rate: 236,
    change: "+23"
  },
  {
    id: 8,
    name: "CANARA",
    rate: 236,
    change: "+23"
  },
  {
    id: 9,
    name: "CANARA",
    rate: 236,
    change: "+23"
  },
  {
    id: 10,
    name: "SBIN",
    rate: 236,
    change: "+23"
  },
  {
    id: 11,
    name: "SBI",
    rate: 236,
    change: "+23"
  }
];

const INITIAL_STATE = {
  currentWatchlist: {
    key: 0,
    name: "P1",
    list: [...SAMPLE_LIST]
  },
  watchList: [
    {
      key: 0,
      name: "P1",
      list: [...SAMPLE_LIST]
    },
    {
      key: 1,
      name: "Watch",
      list: [...SAMPLE_LIST]
    },
    {
      key: 2,
      name: "P2",
      list: [...SAMPLE_LIST]
    },
    {
      key: 3,
      name: "WatchList",
      list: [...SAMPLE_LIST]
    }
  ]
};

const WatchListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      const newWatchList = state.watchList;
      newWatchList.map(watch => {
        if (watch.key == action.newWatch.key) {
          watch.list = [...action.newWatch.list];
        }
      });
      return {
        ...state,
        watchList: [...newWatchList]
      };

    case SET_CURRENT_WATCHLIST:
      let currentWatchlist = {};
      newWatchList.map(watch => {
        if (watch.key == action.key) {
          currentWatchlist = watch.list;
        }
      });
      return {
        ...state,
        currentWatchlist: { ...currentWatchlist }
      };
    default:
      return state;
  }
};

export default WatchListReducer;
