import {
  GET_LAST_MADD,
  SDAROT_CLALI,
  SDAROT_BNIYA,
  FILTER_DATA,
  CLEAT_FILTER,
} from '../actions/type';
//import { filterData } from '../actions/maddActions';

const initialState = {
  lastMadd: {},
  sdarotClali: {},
  sdarotBniya: {},
  filterData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_MADD:
      return {
        ...state,
        lastMadd: action.payload,
      };
    case SDAROT_CLALI:
      return {
        ...state,
        sdarotClali: action.payload,
      };
    case SDAROT_BNIYA:
      return {
        ...state,
        sdarotBniya: action.payload,
      };
    case FILTER_DATA:
      return {
        ...state,
        filterData: [...state.filterData, action.payload],
      };
    case CLEAT_FILTER:
      return {
        ...state,
        filterData: action.payload,
      };

    default:
      return state;
  }
};
