
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import Home from "./componentes/Home";




function App() {

  return (
    <Container>
      <Router>      
          <Route exact path="/">
          <Home/>
          </Route>
        </Router>
    </Container>
  )

}
export default App;
