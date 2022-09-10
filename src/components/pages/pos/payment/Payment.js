import Modal from 'react-bootstrap/Modal';
import {Form, Row, Col, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPaying, setPaid } from '../../../cart/cartSlice';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8181'); 

let rerenderingCount = 0;
function Payment() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [payment, setPayment] = useState(0); 
   
    const modalHandler = () => {
        dispatch(setPaying(!cart.isPaying));
    }

    const submitHandler = () => {
        if (payment >= cart.total) {
            dispatch(setPaying(false));
            dispatch(setPaid(true)); 
            socket.emit('new order', cart);
        }else {
            alert('Payment is not enough');
        }
    }

    const getChange = () => { 
        rerenderingCount = rerenderingCount + 1; 
        const change = payment - Number(cart.total);
        return change > 0 ? change.toFixed(2) : 0;
    }

    const cashHandler = (event) => {
        setPayment(event.target.value);
    }

    return (
        <Modal show={cart.isPaying} onHide={modalHandler}>
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
                        <Form.Control type="text" disabled plaintext value={cart.total} />
                        </Col>
                    </Form.Group> 
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                        Cash:
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" onKeyUp={cashHandler} placeholder="Enter customer cash here.." />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">
                        Change:
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" disabled placeholder="Change" value={getChange()} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={submitHandler}>
                Submit
            </Button> 
            </Modal.Footer>
        </Modal>
    )
}

export default Payment;