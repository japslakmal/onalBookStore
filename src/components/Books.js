import React, { Component } from 'react'
import firebase from '../configuration/fbConfig'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'

const db = firebase.firestore();

class Books extends Component {

    state = {
        booksData: [],
        bookName: '',
        author: '',
        isbn: '',
        price: ''
    }

    componentDidMount() {
        db.collection('books').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    booksData: [...this.state.booksData, doc.data()]
                })
            })
        })
    }

    render() {
        return (
            <Container id="books" className="books">
                <Row>
                    <Col>
                        <h1>AVAILABLE BOOKS</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', flexDirection: 'row' }}>
                        {this.state.booksData.length ? (
                            this.state.booksData.map(item => {
                                return (
                                    <div >
                                        <Card className="book">
                                            <Card.Body>
                                                <Card.Title>
                                                    {item.bookName}
                                                </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    {item.author}
                                                </Card.Subtitle>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Card.Text>
                                                        {item.isbn}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {item.price}
                                                    </Card.Text>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        ) : (
                                <div style={{textAlign: 'center'}}>
                                   <Button variant="primary" disabled >
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    Loading...
                                    </Button> 
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Books