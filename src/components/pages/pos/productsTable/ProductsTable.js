import { Row, Col } from 'react-bootstrap';
import { addLineItem } from '../../../cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

function ProductsTable () {
    const dispatch = useDispatch();
    const [products, setProducts] = useState();

    const addItemHandler = (item) => { 
        dispatch(addLineItem({...item, quantity: 1}));
    }

    useEffect(() => {
        const products = [
            {
                id: '1234567',
                name: 'Tanduay Ice',
                price: 95
            },
            {
                id: '1234568',
                name: 'Rebisco sandwich',
                price: 15.75
            },
            {
                id: '1234588',
                name: 'Tilapia bangus',
                price: 10.25
            },
            {
                id: '12345679',
                name: 'Surf powder',
                price: 125
            },
            {
                id: '1234567011',
                name: 'Green water',
                price: 25.70
            },
            {
                id: '1234567100',
                name: 'Potato crunch',
                price: 95
            },
        ];

        setProducts(products);
    }, []);

    return (
        <Row>
            { products?.map((item) => (
                <Col xs={3}>
                    <div style={styles.product} onClick={() => addItemHandler(item)}>
                        <div style={styles.image}></div>
                        <div style={styles.title}>{item.name}</div>
                        <div style={styles.price}>{item.price}</div>
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
    image: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
        minHeight: '120px',
        backgroundColor: '#f4f4f5',
        marginBottom: '10px'
    },
    title: {
        fontWeight: '500', 
    },
    price: {
        color: 'orange'
    }
}

export default ProductsTable;