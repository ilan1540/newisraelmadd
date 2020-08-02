import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';

export const start = () => {
  const [sdarotList, setSdarotList] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    getSdarot();
    dispatch({
      type: 'GET_STAROT',
      payload: sdarotList,
    });
  }, [sdarotList, dispatch]);

  async function getSdarot() {
    const url =
      'https://api.cbs.gov.il/index/catalog/subject?id=37&format=json&download=false';
    await axios.get(url).then((res) => {
      setSdarotList(res);
    });
  }
};
