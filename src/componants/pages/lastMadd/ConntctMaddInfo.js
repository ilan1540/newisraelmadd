import React from 'react';

export const ConntctMaddInfo = ({ tggler, lastUpdete }) => {
  return (
    <div className="mt-5">
      {lastUpdete && lastUpdete.date ? (
        <div className="card1">
          <div className="card-header">
            {lastUpdete.code} {lastUpdete.name}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <ul className="list-group">
                  <li>שנה</li>
                  <li>חודש</li>
                  <li>בסיס מדד</li>
                  <li>שער מדד</li>
                  <li>שינוי החודש</li>
                  <li>שינוי השנה</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-group">
                  <li>{lastUpdete.date[0].year}</li>
                  <li>{lastUpdete.date[0].monthDesc}</li>
                  <li>{lastUpdete.date[0].currBase.baseDesc}</li>
                  <li>{lastUpdete.date[0].currBase.value}</li>
                  <li>{lastUpdete.date[0].percent}%</li>
                  <li>{lastUpdete.date[0].percentYear}%</li>
                </ul>
              </div>
            </div>

            <h5 className="card-title">
              מדד בגין :המדד בגין החודש הרשום מתפרסם ב-15 לחודש הבא
            </h5>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={tggler}
          >
            הצג לפי מדד בסיס
          </button>
        </div>
      ) : null}
    </div>
  );
};
