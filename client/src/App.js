import { Route,Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Worker from './components/workers/Worker';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import 'materialize-css/dist/css/materialize.min.css';


const App = () => {
  return(
  <>
  <MainNavbar />
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About} />
  <Route exact path="/workers" component={Worker}/>
  {/* <Route exact path="/workers/:id/services" component={Services} /> */}


  <Route exact path="/NoMatch"components={NoMatch} />
</Switch>
  </>
  )
}
export default App;
