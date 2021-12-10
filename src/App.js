import facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import { Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { StartScreen } from "./Components/StartScreen";
import { LoseScreen } from "./Components/LoseScreen";
import Game from "./Components/Game"
import { useState } from "react";
import Rules from "./Components/Rules";




function App() {


  // let rulesElement = document.getElementById("rules")
  // let mRules= new bootstrap.Modal(rulesElement)
  // document.getElementById("rulesBtn").addEventListener("click",e =>mRules.toggle())



  const [score, setScore] = useState(1)
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  








  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
        
            <StartScreen  show={show} setShow={setShow} fullscreen={fullscreen} setFullscreen={setFullscreen} />
            
          </Route>
          <Route exact path="/game">
          
            <Game facade={facade} score={score} setScore={setScore} 
            show={show} setShow={setShow} fullscreen={fullscreen} setFullscreen={setFullscreen}
            />
          </Route>
          <Route exact path="/rules">
  
            <Rules   show={show} setShow={setShow} fullscreen={fullscreen} setFullscreen={setFullscreen}/> 
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
