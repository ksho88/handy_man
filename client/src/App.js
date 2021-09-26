;import { Route,Switch } from 'react-router-dom';
import Home from './  /shared/Home';
import About from './components/shared/about';
import Handy_Man from './components/shared/Handy_Man';
import noMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => {
  <>
  <MainNavbar />
<switch>
  <Route exact path="/" components={Home}/>
  <Route exact path="/about" components={About} />
  <Rout exact pathc="/workers" components={Handy_Man}/>
  <Rout components={Nomatch} />
</switch>
  </>
}
export default App;
