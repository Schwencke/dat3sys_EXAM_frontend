
import facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './componentes/Home'
import './App.css'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home facade={facade} />
          </Route>
        </Switch>
      </Router>
    </Container>
  )

}

export default App;
