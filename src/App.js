import React, { useState } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

// reactrouter
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// toast
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// firebase
import firebase from 'firebase/app';
import "firebase/auth"

// components
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import { UserContext } from './context/UserContext';

import Footer from './layout/Footer';
import Header from './layout/Header';


//initialize the firebase
import firebaseConfig from './config/firebaseConfig';
firebase.initializeApp(firebaseConfig)

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
