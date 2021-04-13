import React, {useEffect, useRef, useState} from "react";
import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB4_jY_zXe6wloH9JZGRPwh01bgh7OFwIY",
  authDomain: "chat-react-491db.firebaseapp.com",
  projectId: "chat-react-491db",
  storageBucket: "chat-react-491db.appspot.com",
  messagingSenderId: "536665703041",
  appId: "1:536665703041:web:096601f117884cb9220380"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const[user] =useAuthState(auth);
  return (
    <div className="App">
    <h1>Sofka chat</h1>
    <SignOut />
    <section>{user ? <ChatRoom /> : <SignIn />}</section>      
    </div>
  );
}

function ChatRoom(){
  return <p>Chat</p>
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider  = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <button onClick = {signInWithGoogle}>Sign with Google</button>
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => {
      auth.signOut();
    }}>Sign out</button>
  );
}

export default App;
    
  


