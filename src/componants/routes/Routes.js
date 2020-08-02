import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import AllBaseMadd from '../pages/lastMadd/AllBaseMadd';
import LastMadd from '../pages/lastMadd/LastMadd';
import { TableMadd } from '../pages/showTableMdd/TableMadd';
import { Quetion } from '../pages/quetion/Quetion';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/madd" component={Home} />
        <Route exact path="/lastmadd" component={LastMadd} />
        <Route exact path="/madd/all" component={AllBaseMadd} />
        <Route exact path="/tablemadd" component={TableMadd} />
        <Route exact path="/quetion" component={Quetion} />
      </Switch>
    </div>
  );
};

export default Routes;
