import { Row, Col } from 'react-bootstrap';

function Categories () {
    return <div style={styles.row}>
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
        <span style={styles.categoryName}>Hello World</span> 
    </div>;
}

const styles = {
    row: {
        overflow: 'auto',
        whiteSpace: 'nowrap'
    },
    categoryName: {
        float: 'none',
        display: 'inline-block',
        backgroundColor: '#ffffff',
        padding: '10px',
        marginRight: '10px'
    }
}
export default Categories;