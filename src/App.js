import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import P404 from './pages/404/404';
import AddMovies from './pages/addmovies/addmovie';
import Movie from './pages/movies/movie';
import Register from './pages/register/register';
import Login from './pages/login/login.js';


const App = ()=> {

  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Redirect to="/movie"/>
        </Route>
        <Route path="/movie" component={Movie}/>
        <Route path="/addmovie" component={AddMovies}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route component={P404}/>
    </Switch>
    
  
</BrowserRouter>
  );
}

export default App;