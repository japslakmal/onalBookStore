import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ bookName: "", author: "", price: "", isbn: "", username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <Container style={{clear: 'both'}} id="addBook">
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Form onSubmit={submitHandler} className="addBook">
                        <div>
                            <h2>ADD NEW BOOK</h2>
                            {(error != "") ? (<div className="error">{error}</div>) : ""}
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" name="bookName" placeholder="Enter Book Name" required onChange={e => setDetails({ ...details, bookName: e.target.value })} value={details.bookName} />
                            </Form.Group>
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" placeholder="Type Author's Name" required onChange={e => setDetails({ ...details, author: e.target.value })} value={details.author} />
                            </Form.Group>
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Type Price" required onChange={e => setDetails({ ...details, price: e.target.value })} value={details.price} />
                            </Form.Group>
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>International Standard Book Number</Form.Label>
                                <Form.Control type="text" name="isbn" placeholder="Type ISBN" required onChange={e => setDetails({ ...details, isbn: e.target.value })} value={details.isbn} />
                            </Form.Group>
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Type User Name" required onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                            </Form.Group>
                            <Form.Group controlId="AddNewBookForm">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Type Password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </Form.Group>
                            <Button variant="outline-primary" size="lg" type="submit">
                                ADD BOOK
                            </Button>
                        </div>     
                    </Form>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default LoginForm
