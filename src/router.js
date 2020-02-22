/*Added routing information  */

import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
//import AdminForm from './pages/form';
import Layout from './components/layout';


function RouterConfig({ history }) {
    return (
      <Fragment>
    
          <ConnectedRouter history={history}>
            <Switch>             
              <Route path="/" exact component={Layout} />
              {/* <Route path="/customer" exact component={AdminForm} /> */}
            </Switch>
          </ConnectedRouter>
  
      </Fragment>
    );
  }
  
  export default RouterConfig;
  
