import React, { useEffect, Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterData, clearFilter } from '../../../actions/maddActions';

const SelectBasis = () => {
  const lastMadd = useSelector((state) => state.madd.lastMadd);
  const [currBase, setCurrBase] = useState();
  const [prevBase, setPrevBase] = useState();
  const [mbasis, setMbasis] = useState();
  //const [selectBasis, setSelectBasis] = useState(1);
  const [basisSelected, setBasisSelected] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const filterMadd = () => {
      // console.log(lastMadd);
      if (lastMadd && lastMadd.date) {
        lastMadd.date.map((month) => {
          //   console.log(month);
          month &&
            month.prevBase.map((prev) => {
              if (prev.baseDesc === basisSelected) {
                //  console.log(prev);
                //  console.log(month);
                const rec = {
                  code: lastMadd.code,
                  name: lastMadd.name,
                  year: month.year,
                  month: month.month,
                  monthDesc: month.monthDesc,
                  percent: month.percent,
                  percentYear: month.percentYear,
                  baseDesc: prev.baseDesc,
                  coeff: prev.coeff,
                  value: prev.value,
                };
                //  console.log(rec);
                dispatch(filterData(rec));
              }
              return null;
            });
          //  console.log(month.currBase);

          //  month &&
          //   month.currBase.map((curr) => {
          if (month.currBase.baseDesc === basisSelected) {
            //  console.log(prev);
            //  console.log(month);
            const rec = {
              code: lastMadd.code,
              name: lastMadd.name,
              year: month.year,
              month: month.month,
              monthDesc: month.monthDesc,
              percent: month.percent,
              percentYear: month.percentYear,
              baseDesc: month.currBase.baseDesc,
              coeff: 1,
              value: month.currBase.value,
            };
            dispatch(filterData(rec));
            //  console.log(rec);
          }
          // });
          return null;
        });
      }
    };
    dispatch(clearFilter());
    filterMadd();
  }, [basisSelected, lastMadd, currBase, dispatch]);

  useEffect(() => {
    if (lastMadd && lastMadd.date) {
      setBasisSelected(lastMadd.date[0].currBase.baseDesc);
    }
  }, [lastMadd]);

  useEffect(() => {
    const basis = [];
    if (lastMadd && lastMadd.date) {
      setCurrBase(lastMadd.date[0].currBase);
      setPrevBase(lastMadd.date[0].prevBase);
      // console.log(lastMadd);
    }
    var mekdem = 1;
    if (currBase) {
      basis.push({
        baseDesc: currBase.baseDesc,
        coeff: 1,
        mekadem: 1,
      });
      if (prevBase) {
        prevBase.map((i) => {
          basis.push({
            baseDesc: i.baseDesc,
            coeff: i.coeff,
            mekadem: parseFloat(i.coeff) * parseFloat(mekdem),
          });
          mekdem = parseFloat(i.coeff) * parseFloat(mekdem);
          //    console.log(mbasis);
          return basis;
        });
        if (!mbasis) {
          setMbasis(basis);
        }
      }
    }
  }, [lastMadd, currBase, prevBase, mbasis]);
  //  console.log(mbasis);

  return (
    <Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            בסיס מדד
          </label>
        </div>
        <select
          onChange={(e) => setBasisSelected(e.target.value)}
          className="custom-select"
          id="inputGroupSelect01"
        >
          {mbasis
            ? mbasis.map((i) => (
                <option
                  key={i.coeff}
                  value={i.baseDesc}
                  onChange={(e) => setBasisSelected(e.target.value)}
                >
                  {i.baseDesc}
                </option>
              ))
            : null}
        </select>
      </div>
    </Fragment>
  );
};

export default SelectBasis;
