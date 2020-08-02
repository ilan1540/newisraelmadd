import React from 'react';

export const SelectMaddBasis = ({ basis, selected }) => {
  // console.log(basis);

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          בסיס מדד
        </label>
      </div>
      <select
        onChange={(e) => selected(e.target.value)}
        className="custom-select"
        id="inputGroupSelect01"
      >
        {basis
          ? basis.map((i) => (
              <option
                key={i.coeff}
                value={i.mekadem}
                onChange={(e) => selected(e.target.value)}
              >
                {i.baseDesc}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
