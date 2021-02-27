import './App.css';
import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
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

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      db.collection('books').add(details)
      setUser({
        username: details.username

      });
    } else {
      setError("Details do not match check your User Name and Password");
    }
  }

  const Logout = () => {
    setUser({ username: "" });
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Books />
      {(user.username != "") ? (
        <Container style={{clear: 'both'}}>
          <Row>
            <Col md={2}></Col>

            <Col md={8}>
              <div className="welcome">
                <h2>Welcome, {user.username}</h2>
                <h2>Succesfully added a new book</h2>
                <p>After adding new book repress the page</p>
                <Button variant="outline-primary" size="lg" onClick={Logout}>ADD MORE</Button>
              </div>
            </Col>

            <Col md={2}></Col>
          </Row>
        </Container>

      ) : (
          <AddNewBook Login={Login} error={error} />
        )}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
