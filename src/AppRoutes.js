import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeView from './home';
import Product from './product';
import ShelfView from './shelf';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <HomeView /> </Route>
        <Route exact path="/home"> <HomeView /> </Route>
        <Route exact path="/productos"> <ShelfView /> </Route>
        <Route exact path="/productos/:id"> <Product /> </Route>
        <Route path="*"> 404 </Route>
      </Switch>
    </Router>
  );
}

export default App;
