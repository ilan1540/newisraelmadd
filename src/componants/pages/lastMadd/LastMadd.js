import React, { Fragment, useState } from 'react';

import AllBaseMadd from './AllBaseMadd';
import { ConntctMaddInfo } from './ConntctMaddInfo';
import { useSelector } from 'react-redux';

const LastMadd = () => {
  const lastUpdete = useSelector((state) => state.madd.lastMadd);
  const [showBaseTav, setShowBaseTav] = useState(false);

  const togglerTav = () => {
    setShowBaseTav(!showBaseTav);
  };

  return (
    <Fragment>
      {lastUpdete && !showBaseTav ? (
        <ConntctMaddInfo tggler={togglerTav} lastUpdete={lastUpdete} />
      ) : (
        <AllBaseMadd tggler={togglerTav} lastUpdete={lastUpdete} />
      )}
    </Fragment>
  );
};

export default LastMadd;
