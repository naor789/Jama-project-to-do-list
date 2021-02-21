import React, { useState, useEffect, useContext } from "react";
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { auth, app } from "./components/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { useAuth, AuthContext} from './context/AuthContext';
import { useHistory } from "react-router-dom";
// import { UserContext } from '../context/UserContext';


// firebase.initializeApp({
//   apiKey: "AIzaSyCyHntjzxnknCzqAN4qawQHUcZQfgIMiFE",
//   authDomain: "jama-5f3cf.firebaseapp.com",
// });

export default function App() {
  // const history = useHistory();
  // const [ currentUser, setCurrentUser ] = useContext(AuthContext);
  // const { logout } = useContext(AuthContext)
  // const [user] = useAuthState(auth);
  // const [isSignedIn, setIsSignedIn] = useState({
  //   isSignedIn: false
  // });
  // const state = { isSignedIn: false }


  // const uiConfig = {
  //   signInFlow: "popup",
  //  signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     // auth.GoogleAuthProvider.PROVIDER_ID,
  //     // auth.FacebookAuthProvider.PROVIDER_ID,
  //     // auth.EmailAuthProvider.PROVIDER_ID,
  //   ],
  //   // callbacks: {
  //   //   signInSuccess: () => false
  //   // }
  // }


  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     // setCurrentUser(user)
  //     setIsSignedIn({ isSignedIn: !!user })
  //   })

  //   return unsubscribe;
  // }, [])

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setIsSignedIn({ isSignedIn: !!user })
  //     console.log("user", user)
  //   });

  // }, []);


  // function SignIn() {

  //   const signInWithGoogle = () => {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     auth.signInWithPopup(provider);
  //   }

  //   return (
  //     <>
  //       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
  //       <p>Do not violate the community guidelines or you will be banned for life!</p>
  //     </>
  //   )

  // }

  // function SignOut() {
  //   return auth.currentUser && (
  //     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  //   )
  // }

  // async function handleLogOut() {
  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch { }
  // }


  return (
    // <AuthProvider>
            <Router>
        <div className="container">
              {/* <span>

                    <StyledFirebaseAuth
                      uiConfig={uiConfig}
                      firebaseAuth={firebase.auth()}
                      />
                  </span> */}
          <Switch>
          <Route exact path="/" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />

                    {/* <Route exact path="/">
                      <LogIn></LogIn>
                    </Route>
                    <Route path="/signup">
                      <SignUp></SignUp>
                    </Route>
                    <Route exact path="/landingpage">
                      <Home></Home>
                    </Route> */}
                  </Switch>


</div>
                </Router>
    // </AuthProvider>
  );
}

