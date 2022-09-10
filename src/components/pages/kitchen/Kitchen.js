import { Container, Row, Col, Badge } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Form } from "react-bootstrap";

function Kitchen () {
    return (
        <Container style={styles.container}> 
            <h1 style={styles.header}>Orders</h1>
            <div style={styles.order}>
                <Row> 
                    <Col xs={8}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>QTY</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                            </tbody>
                        </Table> 
                    </Col>
                    <Col style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}> 
                            <Badge bg="warning">Pending</Badge>  
                            <div style={styles.orderNumber}># 1001921000</div> 
                            <Form.Select aria-label="Default select example">
                                <option>New order</option>
                                <option value="1">Preparing</option>
                                <option value="2">Done</option> 
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
            </div> 
            <div style={styles.order}>
                <Row> 
                    <Col xs={8}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>QTY</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                            </tbody>
                        </Table> 
                    </Col>
                    <Col style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}> 
                            <Badge bg="warning">Pending</Badge>  
                            <div style={styles.orderNumber}># 1001921000</div> 
                            <Form.Select aria-label="Default select example">
                                <option>New order</option>
                                <option value="1">Preparing</option>
                                <option value="2">Done</option> 
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={styles.order}>
                <Row> 
                    <Col xs={8}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>QTY</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                            </tbody>
                        </Table> 
                    </Col>
                    <Col style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}> 
                            <Badge bg="warning">Pending</Badge>  
                            <div style={styles.orderNumber}># 1001921000</div> 
                            <Form.Select aria-label="Default select example">
                                <option>New order</option>
                                <option value="1">Preparing</option>
                                <option value="2">Done</option> 
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={styles.order}>
                <Row> 
                    <Col xs={8}>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>QTY</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hamburger dog</td>
                                </tr>
                            </tbody>
                        </Table> 
                    </Col>
                    <Col style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{textAlign: 'center'}}> 
                            <Badge bg="warning">Pending</Badge>  
                            <div style={styles.orderNumber}># 1001921000</div> 
                            <Form.Select aria-label="Default select example">
                                <option>New order</option>
                                <option value="1">Preparing</option>
                                <option value="2">Done</option> 
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

const styles = {
    label: {
        fontSize: '1em', 
        fontWeight: '500',
        marginTop: '10px'
    },
    orderNumber: {
        fontSize: '1.7em', 
        fontWeight: '700', 
        marginBottom: '10px',
        marginTop: '10px'
    },
    order: {
        backgroundColor: "#fff",
        border: 'solid 1px #ddd',
        borderRadius: '5px',
        padding: '20px', 
        marginBottom: '20px',
    },
    container: {
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '20px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '15px'
    },
    widget: {
        textAlign: 'center',
        backgroundColor: '#ffffff'
    }
}

export default Kitchen;