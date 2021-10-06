import React, { Fragment } from 'react';
import './styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
