import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyCyHntjzxnknCzqAN4qawQHUcZQfgIMiFE",
    authDomain: "jama-5f3cf.firebaseapp.com",
    databaseURL: "https://jama-5f3cf-default-rtdb.firebaseio.com",
    projectId: "jama-5f3cf",
    storageBucket: "jama-5f3cf.appspot.com",
    messagingSenderId: "650485490296",
    appId: "1:650485490296:web:e7af04fcde99fc58d3838d"

})

export const database = firebase.firestore(app)
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth()

export default app