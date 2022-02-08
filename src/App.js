import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import SiteNav from './Components/SiteNav/SiteNav';
import Login from './Components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Watch from './Components/Watch/Watch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyProfile from './Components/MyProfile/MyProfile';
import WatchRoute from './Components/WatchRoute/WatchRoute';
import View from './Components/View/View';
import NotFound from './Components/NotFound/NotFound';
import Admin from './Components/Admin/Admin';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import Show from './Components/Show/Show';
import WatchLater from './Components/WatchLater/WatchLater';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteNav></SiteNav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/show">
            <Show></Show>
          </Route>
          <PrivateRoute path="/watchlater">
            <WatchLater></WatchLater>
          </PrivateRoute>
          <PrivateRoute path="/watch/:watchid/:show">
            <Watch></Watch>
          </PrivateRoute>
          <WatchRoute path="/view/:show/:watchid">
            <View></View>
          </WatchRoute>
          <PrivateRoute path="/myprofile">
            <MyProfile></MyProfile>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <AdminRoute path="/admin">
            <Admin></Admin>
          </AdminRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;