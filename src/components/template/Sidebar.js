
import { ListGroup } from "react-bootstrap";
function Sidebar () {
    return (
        <ListGroup style={{marginTop: '10px'}}>
            <ListGroup.Item style={styles.menu}>
                <img alt="icon" style={styles.image} src={require('../../assets/images/transaction.png')} />
            </ListGroup.Item> 
            <ListGroup.Item style={styles.menu}>
                <img alt="icon" style={styles.image} src={require('../../assets/images/ready-stock.png')} />
            </ListGroup.Item>
            <ListGroup.Item style={styles.menu}>
                <img alt="icon" style={styles.image} src={require('../../assets/images/logout.png')} />
            </ListGroup.Item>
        </ListGroup>
    )
}

const styles = {
    menu: {
        width: '25px',
        backgroundColor: "inherit",
        padding: 0,
        border: 0,
        marginBottom: '20px',
        cursor: 'pointer'
    },
    image: {
        width: '25px',
        height: '25px',
        color: "#333"
    }
}

export default Sidebar;