import React from 'react';
import Resume from "./components/Resume/Resume";
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Bio from './components/Bio/Bio';


function App() {
  return (
    <Switch>
      <Route path="/resume" render={props =>
        <Resume />
      }/>
      <Route path="/portfolio" render={props =>
        <Portfolio />
      }/>
       <Route path="/bio" render={props =>
        <Bio />
      }/>
      <Route exact path="/" render={props =>
          <Layout/>
        }/>

    </Switch>
  );
}

export default App;
