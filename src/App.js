import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from "./components/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';




function App() {
  const [user] = useAuthState(auth);


  function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )

  }

  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }


  return (
    <AuthProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/login">
            <LogIn></LogIn>
            </Route>
            <Route path="/signup">
            <SignOut></SignOut>
            </Route> 
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>

        </div>
     </AuthProvider>
  );
}

export default App;
