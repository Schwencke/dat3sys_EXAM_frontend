import Facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Game from "./Components/Game";
import './App.css'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StartScreen } from "./Components/StartScreen";

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
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
