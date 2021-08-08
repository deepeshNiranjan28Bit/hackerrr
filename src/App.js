import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route exact path="/">
          xxxxx
        </Route> */}
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
