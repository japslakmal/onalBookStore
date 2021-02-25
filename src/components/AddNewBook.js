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
                <Col md={2}>

                </Col>

                <Col md={8}>
                    <Form onSubmit={submitHandler} className="addBook">
                        <div>
                            <h2>Add New Book</h2>
                            {(error != "") ? (<div className="error">{error}</div>) : ""}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control type="text" name="bookName" placeholder="Enter Book Name" onChange={e => setDetails({ ...details, bookName: e.target.value })} value={details.bookName} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name="author" placeholder="Author" onChange={e => setDetails({ ...details, author: e.target.value })} value={details.author} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Price" onChange={e => setDetails({ ...details, price: e.target.value })} value={details.price} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>International Standard Book Number</Form.Label>
                                <Form.Control type="text" name="isbn" placeholder="Type ISBN" onChange={e => setDetails({ ...details, isbn: e.target.value })} value={details.isbn} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Type User Name" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Book
                            </Button>
                        </div>
                    </Form>
                </Col>

                <Col md={2}>

                </Col>
            </Row>

        </Container>
    )
}

export default LoginForm
