import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { SelectMaddBasis } from './SelectMaddBasis';
import { ShowMaddInfo } from './ShowMaddInfo';

export const TableMadd = () => {
  const lastUpdete = useSelector((state) => state.madd.lastMadd);
  const [currBase, setCurrBase] = useState();
  const [prevBase, setPrevBase] = useState();
  const [mbasis, setMbasis] = useState();
  const [selectBasis, setSelectBasis] = useState(1);
  const [sidra, setSidra] = useState(null);
  const [year, setYear] = useState(2020);
  const [tav, setTav] = useState();

  useEffect(() => {
    const basis = [];
    if (lastUpdete && lastUpdete.date) {
      setCurrBase(lastUpdete.date[0].currBase);
      setPrevBase(lastUpdete.date[0].prevBase);
      // console.log(lastUpdete);
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

          return basis;
        });
        if (!mbasis) {
          setMbasis(basis);
        }
      }
    }
  }, [lastUpdete, currBase, prevBase, mbasis]);

  const showTavHandler = () => {
    const url = `https://api.cbs.gov.il/index/data/price?id=${sidra.codeId}&format=json&download=false&startPeriod=01-${year}&endPeriod=12-${year}`;

    // chek if select sidra and year

    if (sidra && year > 1951) {
      axios
        .get(url)
        .then((tav) => setTav(tav.data.month[0]))
        .catch((error) => console.log(error));
    }
  };
  /*
const selectBasisHandel = (e) =>{
  setSelectBasis(parseFloat(e)* )
}
*/
  return (
    <>
      <SelectMaddBasis basis={mbasis} selected={setSelectBasis} />
      <ShowMaddInfo sidra={setSidra} />
      <div className="input-group mt-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            שנה
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          aria-label="Year"
          onChange={(e) => setYear(Number(e.target.value))}
          value={year}
          name="year"
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={showTavHandler}
      >
        הצג טבלת מדד
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">mont No</th>
            <th scope="col">month</th>
            <th scope="col">base</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          {tav &&
            tav.date.map((rec) => (
              <tr>
                <th scope="row">{rec.month}</th>
                <td>{rec.monthDesc}</td>
                <td>{rec.currBase.baseDesc}</td>
                <td>
                  {parseFloat(rec.currBase.value) * parseFloat(selectBasis)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
