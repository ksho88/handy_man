import { Route,Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Workers from './components/workers/Workers';
import NoMatch from './components/shared/NoMatch';
import MainNavbar from './components/shared/MainNavbar';
import 'materialize-css/dist/css/materialize.min.css';
import Worker from './components/workers/Worker';
// import Services from './components/services/Service';
// import Comments from './components/comments/Comments';

const App = () => {
  return(
  <>
  <MainNavbar />
<Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About} />
  <Route exact path="/Workers" component={Workers}/>
  <Route exact path="/Worker"component={Worker}/>
  {/* <Route exact path="/workers/:id/services" component={Services} /> */}


  <Route exact path="/NoMatch"components={NoMatch} />

</Switch>
  </>
  )
}
export default App;
