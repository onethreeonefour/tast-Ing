import React, { Suspense } from 'react';
import NavBar from './Components/NavBar/NavBar'
import { Route, Switch } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import Chef from './Components/Chef/Chef'
import SearchPageResult from './Components/SearchResult/SearchResultPage'

import './App.css';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)} >
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 69px)' }} className="background">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search/:query/:diet" component={SearchPageResult} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
