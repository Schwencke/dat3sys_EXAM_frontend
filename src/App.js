import facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StartScreen } from "./Components/StartScreen";
import { LoseScreen } from "./Components/LoseScreen";
import Game from "./Components/Game"
import { useState } from "react";

function App() {

  const [score, setScore] = useState(1)
  const [showRules, setShowRules] = useState(false);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <StartScreen showRules={showRules} setShowRules={setShowRules} />
          </Route>
          <Route exact path="/game">
            <Game facade={facade} score={score} setScore={setScore} showRules={showRules} setShowRules={setShowRules} />
          </Route>
          <Route exact path="/lose">
            <LoseScreen score={score} />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App;
