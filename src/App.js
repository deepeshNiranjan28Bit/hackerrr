import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>This is 404 page.</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
