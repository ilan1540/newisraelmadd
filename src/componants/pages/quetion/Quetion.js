import React from 'react';
import { useSelector } from 'react-redux';
import SelectBasis from './SelectBasis';

export const Quetion = () => {
  const filterData = useSelector((state) => state.madd.filterData);

  return (
    <div>
      <SelectBasis />
      {filterData ? (
        <div className="container">
          <div className="mr-auto">
            <h4>מדד המחירים לצרכן</h4>
          </div>
          <table className="table table-sm table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">שנה</th>
                <th scope="col">חודש</th>
                <th scope="col">בסיס מדד</th>
                <th scope="col">ערך</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((rec) => (
                <tr key={rec.month}>
                  <th scope="row">{rec.year}</th>
                  <td>{rec.monthDesc}</td>
                  <td>{rec.baseDesc}</td>
                  <td>{rec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
