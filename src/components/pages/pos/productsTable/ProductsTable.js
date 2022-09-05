import { Row, Col } from 'react-bootstrap';

function ProductsTable () {
    return <Row>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col> 
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
        <Col xs={3}>
            <div style={styles.product}>
                <div style={styles.image}></div>
                <div style={styles.title}>San Miguel Bear</div>
                <div style={styles.price}>20.25</div>
            </div>
        </Col>
    </Row>;
}

const styles = {
    product: {
        backgroundColor: '#ffffff',
        minHeight: '200px',
        padding: '15px',
        marginBottom: '15px'
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