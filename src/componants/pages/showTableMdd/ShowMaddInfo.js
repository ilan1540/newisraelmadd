import React from 'react';
import { useSelector } from 'react-redux';

export const ShowMaddInfo = ({ sidra }) => {
  const clali = useSelector((state) => state.madd.sdarotClali);
  const bniya = useSelector((state) => state.madd.sdarotBniya);
  // console.log(clali, bniya);
  return (
    <form>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              id="clali"
              type="radio"
              name="sidra"
              onChange={() => sidra(clali)}
            />
            <span className="input-group-text mr-2">{clali.codeName}</span>
          </div>
          <div className="input-group-text mr-2">
            <input
              id="bniya"
              name="sidra"
              type="radio"
              onChange={() => sidra(bniya)}
            />
            <span className="input-group-text mr-2">{bniya.codeName}</span>
          </div>
        </div>
      </div>
    </form>
  );
};
