import React, { createContext , useReducer} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UserReducer';

// context api
export const UserContext = createContext();
const Routing = () => {
  return <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/logout">
      <Logout />
    </Route>
    <Route >
      <Error />
    </Route>
  </Switch>
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={ {state , dispatch} }>
        <Navbar />
        <Routing/>
      </UserContext.Provider>

    </>
  );
}

export default App;
