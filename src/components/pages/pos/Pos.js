import React from "react";
import { Row, Col, ThemeProvider, Container } from 'react-bootstrap';
import Searchbar from "../../searchbar/Searchbar";
import Categories from "../../categories/Categories";
import ProductsTable from "../../productsTable/ProductsTable";
import OrdersTable from "../../ordersTable/OrdersTable";

function Pos () {
    return <ThemeProvider >  
        <Container fluid={1}>
            <Row  style={styles.container}>
                <Col style={styles.itemsCol} xs={8}> 
                    <Searchbar />
                    <Categories />
                    <ProductsTable />
                </Col>
                <Col style={styles.orderCol} xs={4}>
                    <OrdersTable />
                </Col>
            </Row>
        </Container> 
    </ThemeProvider>
};

export default Pos;

const styles = {
    container: {
        minHeight: '1000px',
        textAlign: 'left',
        minWidth:'100%',
    },
    itemsCol : {
        backgroundColor:'#f4f4f5',
        padding: '20px 40px'
    },
    orderCol: {
        backgroundColor: '#ffffff',
        padding: '20px 40px',
    }
}
