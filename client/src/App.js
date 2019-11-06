import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Books}/>
            <Route exact path="/books" component={Books}/>
            <Route path="/books/:id" component={Detail}/>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
