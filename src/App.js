

import SingleDetailpage from './pages/SingleDetailpage'
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'


import './App.css';

function App() {
  return (


    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/detailpage/:id" component={SingleDetailpage} />

    </Switch>




  );
}

export default App;
