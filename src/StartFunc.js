import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getLastMadd, sdarotBniya, sdarotClali } from './actions/maddActions';

export const StartFunc = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sdarot = async () => {
      await axios
        .get(
          'https://api.cbs.gov.il/index/catalog/tree?format=json&download=false&period=M'
        )
        .then((res) => {
          dispatch(sdarotClali(res.data.chapters[0].subject[0].code[0]));
          dispatch(sdarotBniya(res.data.chapters[4].subject[0].code[0]));
        });
    };
    sdarot();
  }, [dispatch]);

  useEffect(() => {
    const getMadd = async () => {
      await axios
        .get(
          'https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last=12&coef=true'
        )
        .then((res) => {
          //  console.log(res.data.month[0]);
          dispatch(getLastMadd(res.data.month[0]));
        });
    };
    getMadd();
    // console.log(res);
  }, [dispatch]);
  return <div></div>;
};
