import Modal from 'react-bootstrap/Modal';
import {Form, Row, Col, Button} from 'react-bootstrap';

function Payment() {
    return (
        <Modal show={false}>
            <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="">
                        <Form.Label column sm="3">
                        Amount:
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" disabled plaintext value="500.00" />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                        Cash:
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" placeholder="Enter customer cash here.." />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                        Change:
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" disabled placeholder="Change" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={null}>
                Submit
            </Button> 
            </Modal.Footer>
        </Modal>
    )
}

export default Payment;