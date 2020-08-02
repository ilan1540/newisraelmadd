import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './AppReducer';

const initialState = {
  lastUpdete: { name: 'ilan bar lev' },
};
const url =
  'https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last=2&coef=true';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action
  const getLastMadd = async () => {
    try {
      const response = await axios.get(url);

      dispatch({
        type: 'GET_LAST_MADD',
        payload: response.data.month[0],
      });
      // setLastUpdate(response.data.month[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const hadelBasisMadd = (lastUpdete) => {
    dispatch({
      type: 'BASIS_MADD',
      payload: lastUpdete,
    });
  };

  return (
    <GlobalContext.Provider
      value={
        ({ lastUpdete: state.lastUpdete, getLastMadd },
        { basis: state.basis, hadelBasisMadd })
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
