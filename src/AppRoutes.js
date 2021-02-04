import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeView from './home';
import ShelfView from './shelf';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <HomeView /> </Route>
        <Route path="/home"> <HomeView /> </Route>
        <Route path="/productos"> <ShelfView /> </Route>
        <Route path="*"> 404 </Route>
      </Switch>
    </Router>
  );
}

export default App;
