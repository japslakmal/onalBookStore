import './App.css';
import React, { useState } from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Books from './components/Books';
import AddNewBook from './components/AddNewBook';
import firebase from './configuration/fbConfig'

const db = firebase.firestore();

function App() {

  const adminUser = {
    username: "bookadmin",
    password: "pwdadmin"
  }

  const [user, setUser] = useState({username:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      db.collection('books').add(details)
      setUser({
        username: details.username
        
      });
    } else {
      setError("Details do not match");
    }
  }

  const Logout = () => {
    setUser({username:""});
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Books />
      {(user.username != "") ? (
        <div className="welcome">
          <h2>Welcome, {user.username}</h2>
          <h2>Succesfully added a new book</h2>
          <button onClick={Logout}>Logut</button> 
        </div>
      ) : (
        <AddNewBook Login={Login} error={error} />
      )}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
