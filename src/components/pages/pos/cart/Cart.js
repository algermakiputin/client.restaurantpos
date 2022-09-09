import { Row, Col, Button, ThemeProvider} from 'react-bootstrap';
import { getComponentsHeight } from '../../../window/Dimension';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeItem, emptyCart, increaseQuantity, descreaseQuantity, setPaying } from '../../../cart/cartSlice'; 
import Receipt from '../receipt/Receipt'; 
import Payment from '../payment/Payment'; 
 
const componentsHeight = getComponentsHeight(); 

function Cart () { 
    const cart = useSelector((state) => state.cart);  
    const dispatch = useDispatch();  

    const Orders = () => {
        return cart?.lineItems?.length ? (
            cart?.lineItems?.map((item, index) => (
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

    const paymentHandler = () => {
        dispatch(setPaying(true));
    };

    return (
        <ThemeProvider style={{position:'relative'}}>
            <Row style={styles.header}>
                <Col xs={9}><h4 style={{marginBottom: 0, fontSize: '1.25em'}}>Order Details</h4></Col>
                <Col xs={3} style={styles.headerRight}>
                    <Button 
                        style={styles.resetButton} 
                        onClick={() => dispatch(emptyCart())} size='sm'>X</Button>
                </Col>
            </Row>
            <div style={styles.lineItemsWrapper}>
                <Orders />
            </div>
            <Row style={styles.summary}> 
                <Col xs={6}>
                    <span style={{fontSize: '1.2em', fontWeight: 500}}>Total:</span>
                </Col>
                <Col xs={6} style={styles.summaryRight}>
                    { cart.total.toFixed(2) }
                </Col>
            </Row>
            <Row styles={styles.actions}>
                <Col><Button style={styles.button} onClick={paymentHandler}>Pay Now</Button></Col>
            </Row>
            <Receipt />
            <Payment />
        </ThemeProvider>
    );
}

const styles = {
    header: {
        alignItems: 'center',
        marginBottom: '15px',
        backgroundColor: '#FF9933',
        padding: '10px',
        borderRadius: '5px',
        color: "#fff"
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
        fontSize: '1.2em',
        fontWeight: 500
    },
    actions: {
        height: `${componentsHeight.actionHeight}px`,
    },
    button: {
        width: '100%',
        borderRadius: 0,
        height: '45px',
        backgroundColor: "#376897",
        borderColor: "#376897"
    },
    actionButton: {
        backgroundColor: "transparent",
        borderColor: "#f4f4f5",
        color: "#333333",
        borderRadius: '0px'
    },
    resetButton: {
        backgroundColor: "#fff", 
        borderColor: "#eee", 
        color: "#000",  
        cursor: 'pointer'
    }
}

export default Cart;