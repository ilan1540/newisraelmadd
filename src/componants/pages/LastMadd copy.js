import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import AllBaseMadd from './AllBaseMadd';
import { ConntctMaddInfo } from './ConntctMaddInfo';

const LastMadd = () => {
  const [lastUpdete, setLastUpdate] = useState();
  const [showBaseTav, setShowBaseTav] = useState(false);

  const getLastMadd = async () => {
    const url =
      'https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last=2&coef=true';
    try {
      const response = await axios.get(url);
      setLastUpdate(response.data.month[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const togglerTav = () => {
    setShowBaseTav(!showBaseTav);
  };

  useEffect(() => {
    getLastMadd();
  }, [lastUpdete]);

  return (
    <Fragment>
      {!showBaseTav ? (
        <ConntctMaddInfo lastUpdete={lastUpdete} tggler={togglerTav} />
      ) : null}

      {showBaseTav ? (
        <AllBaseMadd lastUpdete={lastUpdete} tggler={togglerTav} />
      ) : null}
    </Fragment>
  );
};

export default LastMadd;
