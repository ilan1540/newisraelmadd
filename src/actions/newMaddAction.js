import axios from 'axios';
import {
  FETCH_MADD_REQUEST,
  FETCH_MADD_SUCCESS,
  FETCH_MADD_FAILURE,
} from './type';

export const fetchSdarot = () => {
  return (dispatch) => {
    dispatch(fetchSdarotRequest());
    axios
      .get(
        'https://api.cbs.gov.il/index/catalog/subject?id=37&format=json&download=false'
      )
      .then((response) => {
        const sdarot = response.data.code;
        dispatch(fetchSdarotSuccess(sdarot));
      })
      .catch((error) => {
        dispatch(fetchSdarotFailure(error.message));
      });
  };
};

export const fetchSdarotRequest = () => {
  return {
    type: FETCH_MADD_REQUEST,
  };
};

export const fetchSdarotSuccess = (sdarot) => {
  return {
    type: FETCH_MADD_SUCCESS,
    payload: sdarot,
  };
};

export const fetchSdarotFailure = (error) => {
  return {
    type: FETCH_MADD_FAILURE,
    payload: error,
  };
};
