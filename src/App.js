import React, { Fragment } from 'react';
import './styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import BookDetailsPage from './pages/BookDetailsPage';

const InvalidPage = () => <div>404... Page Not Found</div>;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/book/:bookId' component={BookDetailsPage} />
        <Route component={InvalidPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
