import { Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import { Dimension } from '../../../window/Dimension';
const dimension = Dimension();

const getComponentsHeight = function() {
    const height = dimension.height;
    const orderLineHeight = height / 1.45 - 40;
    const summaryHeight = orderLineHeight / 5;
    const actionHeight = orderLineHeight / 5;
    return {
        orderLineHeight,
        summaryHeight,
        actionHeight
    }
}

const componentsHeight = getComponentsHeight(); 
function OrdersTable () { 
    return <ThemeProvider style={{position:'relative'}}>
        <Row style={styles.header}>
            <Col><h4>Order</h4></Col>
            <Col style={styles.headerRight}><Button size='sm'>X</Button></Col>
        </Row>
        <div style={styles.lineItemsWrapper}>
            <Row style={styles.lineItem}>
                <Col>
                    <div style={styles.product}>Item Name</div>
                    <div style={styles.price}>21.50</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>1  &nbsp;<Button size='sm'>-</Button></div>
                </Col>
            </Row>
            <Row style={styles.lineItem}>
                <Col>
                    <div style={styles.product}>Item Name</div>
                    <div style={styles.price}>21.50</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>1 pcs</div>
                </Col>
            </Row>
            <Row style={styles.lineItem}>
                <Col>
                    <div style={styles.product}>Item Name</div>
                    <div style={styles.price}>21.50</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>1 pcs</div>
                </Col>
            </Row>
            <Row style={styles.lineItem}>
                <Col>
                    <div style={styles.product}>Item Name</div>
                    <div style={styles.price}>21.50</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>1 pcs</div>
                </Col>
            </Row>
            <Row style={styles.lineItem}>
                <Col>
                    <div style={styles.product}>Item Name</div>
                    <div style={styles.price}>21.50</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>1 pcs</div>
                </Col>
            </Row>
        </div>
        <Row style={styles.summary}>
            <Col xs={6}>
                Sub total:
            </Col>
            <Col xs={6} style={styles.summaryRight}>
                344.75
            </Col>
            <Col xs={6}>
                Total:
            </Col>
            <Col xs={6} style={styles.summaryRight}>
                344.75
            </Col>
        </Row>
        <Row styles={styles.actions}>
            <Col><Button style={styles.button}>Proccess</Button></Col>
        </Row>
    </ThemeProvider>;
}

const styles = {
    header: {
        alignItems: 'center',
        marginBottom: '15px'
    },
    headerRight: {
        textAlign:'right'
    },
    lineItemsWrapper: {
        height: `${componentsHeight.orderLineHeight}px`,
        borderBottom: 'solid 1px #eee',
        marginBottom: '20px',
        overflow: 'auto'
    },
    lineItem: {
        alignItems: 'center',
        marginBottom: '15px'
    },
    ordersTableRight: {
        textAlign: 'right'
    },
    product: {
        fontWeight: 500
    },
    price: {
        opacity: '0.6'
    },
    quantity: {
        fontWeight: 500
    },
    summary: {
        height: `${componentsHeight.summaryHeight}px`,
    },
    summaryRight: {
        textAlign: 'right',
    },
    actions: {
        height: `${componentsHeight.actionHeight}px`,
    },
    button: {
        width: '100%'
    }
}

export default OrdersTable;