import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';

function Receipt() {
    const [show, setShow] = useState(true);

    function modalHandler() {
        setShow(!show);
    };

    function getDate() {
        const date = new Date().toUTCString();
        return date.substring(0, date.length - 3);
    }

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
            <Modal.Title>Transaction Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={styles.receipt}>
                    <div style={styles.orderHeader}>
                        <h4>Order details</h4>
                        <Row>
                            <Col xs={4}>Date:</Col>
                            <Col xs={8} style={styles.colRight}>{ getDate() }</Col>
                        </Row>
                    </div> 
                    <div style={styles.receiptBody}>
                        <Row style={styles.lineItem}>
                            <Col xs={8} style={styles.columnHeader}>Description</Col>
                            <Col xs={4} style={{...styles.columnHeader, textAlign: 'right'}}>Total</Col>
                        </Row>
                        <Row style={styles.lineItem}>
                            <Col xs={8}>1x Soup</Col>
                            <Col xs={4} style={styles.colRight}>5,000</Col>
                        </Row>
                        <Row style={styles.lineItem}>
                            <Col xs={8}>1x Soup</Col>
                            <Col xs={4} style={styles.colRight}>5,000</Col>
                        </Row> 
                    </div> 
                    <div style={styles.summary}>
                        <Row>
                            <Col xs={8} style={styles.columnHeader}>Total</Col>
                            <Col xs={4} style={{...styles.columnHeader, textAlign: 'right'}}>4500</Col>
                        </Row>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={modalHandler}>
                Close
            </Button> 
            </Modal.Footer>
        </Modal>
    )
}

const styles = {
    receipt: {
        border: 'solid 1px #eeeeee',
        padding: '20px'
    },
    colRight: {
        textAlign: 'right'
    },
    columnHeader: {
        fontWeight: 500,
    },
    orderHeader: {
        paddingBottom: '20px', 
        borderBottom: 'solid 1px #f4f4f5'
    },
    receiptBody: {
        paddingBottom: '20px',
        paddingTop: '20px',
        borderBottom: 'solid 1px #f4f4f5'
    },
    summary: {
        paddingBottom: '20px',
        paddingTop: '20px', 
    },
    lineItem: {
        marginBottom: '10px'
    }
}

export default Receipt;