import React from 'react';
import './styles/app.scss';
import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
