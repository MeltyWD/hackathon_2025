import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {

  const [profileIsOpen, setProfileIsOpen] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)

  function profileOpenClose() {
    setProfileIsOpen(!profileIsOpen)
  }

  return (
    <>
      <Header
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/my-profile">
         {!loggedIn ? <Redirect to="/log-in" /> : <UserProfile />}
        </Route>
        <Route path="/log-in">
          <Login 
            onClick={profileOpenClose}
          />
        </Route>
      </Switch>
      <Footer />
      
    </>
  );
}

export default App;
