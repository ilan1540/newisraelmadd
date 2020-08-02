import {
  SDAROT_CLALI,
  GET_LAST_MADD,
  SDAROT_BNIYA,
  FILTER_DATA,
  CLEAT_FILTER,
} from './type';

export const getLastMadd = (data) => {
  return {
    type: GET_LAST_MADD,
    payload: data,
  };
};

export const sdarotClali = (data) => {
  return {
    type: SDAROT_CLALI,
    payload: data,
  };
};
export const sdarotBniya = (data) => {
  return {
    type: SDAROT_BNIYA,
    payload: data,
  };
};

export const filterData = (data) => {
  return {
    type: FILTER_DATA,
    payload: data,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAT_FILTER,
    payload: [],
  };
};
