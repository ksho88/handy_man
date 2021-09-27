import { Route,Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Handy_Man from './/components/handy_man/Handy_Man';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => {
  <>
  <MainNavbar />
<switch>
  <Route exact path="/" components={Home}/>
  <Route exact path="/about" components={About} />
  <Route exact pathc="/workers" components={Handy_Man}/>
  <Route components={Nomatch} />
</switch>
  </>
}
export default App;
