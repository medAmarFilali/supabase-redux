import { LOAD_DATA, DELETE_ITEM } from "../actions/ListActions";

const initState = [];

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default listReducer;
