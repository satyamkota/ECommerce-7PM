import './App.css';
import React from 'react';
import HomeScreen from './screens/HomeScreen';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import DetailsScreen from './actions/DetailsAction';
import DetailsScreen from './screens/DetailsScreen'

function App() {
  return (
    <React.Fragment>
        <Router>
          <div className="grid-container">
              <header className="row">
                <div>
                  <NavLink to="/" className="brand" exact={true} strict>AshokIT</NavLink>
                </div>

                <div>
                    <NavLink to="/cart" exact={true} strict><i className="fa fa-shopping-cart"></i></NavLink>
                    <NavLink to="/signin" exact={true} strict><i className="fa fa-user-circle"></i></NavLink>
                </div>
                
              </header>

              <main>
                  <Route path="/" component={HomeScreen} exact={true} strict></Route>
                  <Route path="/details/:id" component={DetailsScreen} exact={true} strict></Route>

              </main>

              <footer className="row center">
                  copyright@ashokit.in
              </footer>
          </div>
        </Router>
    </React.Fragment>


  );
}

export default App;