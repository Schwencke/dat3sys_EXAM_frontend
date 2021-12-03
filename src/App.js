
import facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Components/Home'
import './App.css'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StartScreen } from "./Components/StartScreen";
import { LostScreen } from "./Components/LostScreen";

function App() {

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <StartScreen />
          </Route>
          <Route exact path="/game">
            <Game facade={Facade} />
          </Route>
          <Route exact path="/rules">
            {/* <Rules /> */}
          </Route>
          <Route exact path="/lost">
            <LostScreen />
          </Route>
        </Switch>
      </Router>
    </Container>
  )

}

export default App;
