import { render } from '@testing-library/react';
import TopNavbar from './components/TopNavbar';
import Contactus from "./info/Aboutus";
import Aboutus from './info/Aboutus';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
    return (
      <Router>
        <div className="App">
            <TopNavbar />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/info/contactus" component={Contactus} />
              <Route path="/info/about" component={Aboutus} />
            </Switch>          
        </div>
      </Router>
    );
}

const Main = ()=>(
  <div>
    <h1>Main</h1>
    <h2> More Stuff to be added here soon</h2>
  </div>
);

export default App;
