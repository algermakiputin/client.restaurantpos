import { Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import { Dimension } from '../../../window/Dimension';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeItem, emptyCart, increaseQuantity, descreaseQuantity } from '../../../cart/cartSlice'; 

const dimension = Dimension();

const getComponentsHeight = function() {
    const height = dimension.height;
    const orderLineHeight = height / 1.45 - 55;
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

    const summary = () => { 
        const subTotal = cart?.reduce((partialSum, item) =>  partialSum + (item.price * item.quantity), 0);
        return {
            subTotal: subTotal.toFixed(2)
        }
    }

    const Orders = () => {
        return cart.length ? (
            cart?.map((item, index) => (
                <Row style={styles.lineItem} key={index}>
                    <Col>
                        <div style={styles.product}>{item.name}</div>
                        <div style={styles.price}>{item.price}</div>
                    </Col>
                    <Col style={styles.ordersTableRight}>
                        <div style={styles.quantity}>  
                            <Button 
                                style={styles.actionButton} 
                                size='sm' 
                                onClick={() => item.quantity ? dispatch(descreaseQuantity(item.id))  : dispatch(removeItem(item.id))}>-</Button>
                            &nbsp;&nbsp;&nbsp;<span>{item.quantity}</span>&nbsp;&nbsp;&nbsp;
                            <Button 
                                style={styles.actionButton} 
                                size='sm' 
                                onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                        </div>
                    </Col>
                </Row>
            ))
        ) : <span>Select item to add product...</span>;
    }

    return (
        <ThemeProvider style={{position:'relative'}}>
            <Row style={styles.header}>
                <Col xs={9}><h4 style={{marginBottom: 0}}>Order Details</h4></Col>
                <Col xs={3} style={styles.headerRight}><Button onClick={() => dispatch(emptyCart())} size='sm'>X</Button></Col>
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
                    { summary().subTotal }
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
        marginBottom: '15px',
        backgroundColor: '#f4f4f5',
        padding: '10px',
        borderRadius: '5px'
    },
    headerRight: {
        textAlign:'right'
    },
    lineItemsWrapper: {
        height: `${componentsHeight.orderLineHeight}px`,
        borderBottom: 'solid 1px #eee',
        marginBottom: '20px', 
        width: '100%', 
        position: 'relative',
        overflowY: 'scroll'
    },
    lineItem: {
        alignItems: 'center', 
        borderBottom: 'dashed 1px #f1f1f1',
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    ordersTableRight: {
        textAlign: 'right'
    },
    product: {
        fontWeight: 500,
        fontSize: '1em',
    },
    price: {
        opacity: '0.6',
        fontSize: '0.9em',
    },
    quantity: {
        fontWeight: 500,
        fontSize: '1em'
    },
    summary: {
        height: `${componentsHeight.summaryHeight}px`,
        marginBottom: '5px'
    },
    summaryRight: {
        textAlign: 'right',
        fontSize: '1.15em',
        fontWeight: 500
    },
    actions: {
        height: `${componentsHeight.actionHeight}px`,
    },
    button: {
        width: '100%',
        borderRadius: 0,
        height: '45px',
    },
    actionButton: {
        backgroundColor: "transparent",
        borderColor: "#f4f4f5",
        color: "#333333",
        borderRadius: '0px'
    }
}

export default Cart;