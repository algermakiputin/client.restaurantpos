import { Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import { Dimension } from '../../../window/Dimension';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeItem, emptyCart } from '../../../cart/cartSlice'; 

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
function Cart () { 
    const cart = useSelector((state) => state.cart);  
    const dispatch = useDispatch();

    const removeLineItem = (id) => { 
        dispatch(removeItem({id: id}));
    }

    const resetCart = () => { 
        dispatch(emptyCart());
    }

    const summary = () => { 
        const subTotal = cart?.reduce((partialSum, item) =>  partialSum + (item.price * item.quantity), 0);
        return {
            subTotal
        }
    }

    const Orders = () => {
        return cart?.map((item, index) => (
            <Row style={styles.lineItem} key={index}>
                <Col>
                    <div style={styles.product}>{item.name}</div>
                    <div style={styles.price}>{item.price}</div>
                </Col>
                <Col style={styles.ordersTableRight}>
                    <div style={styles.quantity}>{item.quantity}  &nbsp;
                        <Button size='sm' onClick={() => removeLineItem(item.id)}>-</Button>
                    </div>
                </Col>
            </Row>
        ));
    }

    return (
        <ThemeProvider style={{position:'relative'}}>
            <Row style={styles.header}>
                <Col><h4>Order</h4></Col>
                <Col style={styles.headerRight}><Button onClick={resetCart} size='sm'>X</Button></Col>
            </Row>
            <div style={styles.lineItemsWrapper}>
                <Orders />
            </div>
            <Row style={styles.summary}>
                <Col xs={6}>
                    Sub total:
                </Col>
                <Col xs={6} style={styles.summaryRight}>
                    { summary().subTotal }
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
        </ThemeProvider>
    );
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

export default Cart;