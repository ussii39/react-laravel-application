import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DjangoAPIFetch from "./components/DjangoAPIFetch";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/home/:id"} component={Home} />
        <Route exact path={"/about"} component={About} />
      </Switch>

      <hr />
      <Route exact path={"/"} component={DjangoAPIFetch} />
    </Router>
  );
}

export default App;
