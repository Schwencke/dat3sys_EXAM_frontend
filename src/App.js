import Facade from "./apiFacade";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./Components/Home"
import './App.css'
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
 
function App() {
 
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home facade={Facade}/>
          </Route>
        </Switch>
        </Router>
    </Container>
  )
 
}
export default App;
