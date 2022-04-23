import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Create from "./components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
