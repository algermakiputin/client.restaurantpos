import { Row, Col } from 'react-bootstrap';
import { addLineItem } from '../../../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { setProducts } from '../../../product/productSlice';

var isMounted = false;

function ProductsTable () {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);
    
    const addItemHandler = (item) => { 
        dispatch(addLineItem({...item, quantity: 1}));
    }

    useEffect(() => {
        const products = [
            {
                id: '1234567',
                name: 'Jumbo hot burger',
                price: 95,
                category_id: 1,
                image: 'product2.jpg'
            },
            {
                id: '1234568',
                name: 'Rebisco sandwich',
                price: 15.75,
                category_id: 1,
                image: 'product3.jpg'
            },
            {
                id: '1234588',
                name: 'Tilapia bangus',
                price: 10.25,
                category_id: 2,
                image: 'product.jpg'
            },
            {
                id: '12345679',
                name: 'Surf powder',
                price: 125,
                category_id: 2,
                image: 'pizza2.png'
            },
            {
                id: '1234567011',
                name: 'Green water',
                price: 25.70,
                category_id: 3,
                image: 'pizza3.jpg'
            },
            {
                id: '12345671004',
                name: 'Potato crunch',
                price: 95,
                category_id: 3,
                image: 'product4.jpg'
            }, 
            {
                id: '12345671003',
                name: 'Potato crunch',
                price: 95,
                category_id: 3,
                image: 'product4.jpg'
            },
            {
                id: '12345671002',
                name: 'Potato crunch',
                price: 95,
                category_id: 3,
                image: 'product4.jpg'
            },
            {
                id: '12345671001',
                name: 'Potato crunch',
                price: 95,
                category_id: 3,
                image: 'product4.jpg'
            },
        ];
        if (!isMounted) { 
            isMounted = true;
            dispatch(setProducts(products));
        }
    }, [dispatch]);

    return (
        <Row>
            { products.result?.map((item, index) => (
                <Col xs={3} key={index}>
                    <div style={styles.product} onClick={() => addItemHandler(item)}>
                        <div style={styles.image}>
                            <img style={styles.productImage} alt='logo' src={require(`../../../../assets/products/pizza2.png`)} />
                        </div>
                        <div style={styles.title}>{item.name}</div>
                        <div style={styles.price}>{item.price.toFixed(2)}</div>
                    </div>
                </Col>
            ))}  
        </Row>
    );
}

const styles = {
    product: {
        backgroundColor: '#ffffff',
        minHeight: '200px',
        padding: '15px',
        marginBottom: '15px',
        cursor: 'pointer',
    },
    productImage: {
        resizeMode: 'cover',
        height: '100%',
        maxHeight: '120px',
        minHeight: '120px',
        width: '100%', 
        backgroundColor: '#f4f4f5',
        marginBottom: '10px',
        borderRadius: '5px'
    },
    title: {
        fontWeight: '500', 
    },
    price: {
        color: '#777'
    }
}

export default ProductsTable;