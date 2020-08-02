import React, { Fragment } from 'react';

const AllBaseMadd = ({ lastUpdete, tggler }) => {
  return (
    <Fragment>
      {lastUpdete ? (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="row">
                  {lastUpdete.code} {lastUpdete.name}
                </th>
                <th></th>
                <th>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm "
                    onClick={tggler}
                  >
                    חזור
                  </button>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="col">בסיס</th>
                <th scope="col">מקדם קשר</th>
                <th scope="col">מדד</th>
              </tr>
            </thead>
            <tbody>
              {lastUpdete.name ? (
                <tr>
                  <th scope="row">{lastUpdete.date[0].currBase.baseDesc}</th>
                  <td>1</td>
                  <td>{lastUpdete.date[0].currBase.value}</td>
                </tr>
              ) : null}
              {lastUpdete.date[0].prevBase.map((i) => (
                <tr key={i.coeff}>
                  <th scope="row">{i.baseDesc}</th>
                  <td>{i.coeff}</td>
                  <td>{i.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </Fragment>
  );
};

export default AllBaseMadd;
