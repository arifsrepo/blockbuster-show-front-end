import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Components/Home/Home';
import Navbar  from './Components/Navbar/Nvbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar></Navbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/details">
              <Details></Details>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
