import React from "react";
import { Row, Col, ThemeProvider, Container } from 'react-bootstrap';
import Searchbar from "./searchbar/Searchbar";
import Categories from "./categories/Categories";
import ProductsTable from "./productsTable/ProductsTable";
import OrdersTable from "./ordersTable/OrdersTable";
import { Dimension } from "../../window/Dimension";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; 
import rootReducer from './reducers';

const store = createStore(rootReducer);
const windowDimension = Dimension();

function Pos () { 
    return (
        <Provider store={store}>
            <ThemeProvider >  
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
        </Provider>
    )
};

export default Pos;

const styles = {
    container: { 
        textAlign: 'left',
        minWidth:'100%',
    },
    itemsCol : {
        backgroundColor:'#f4f4f5',
        padding: '20px 40px',
        overflow: 'auto', 
        height: `${windowDimension.height}px`
    },
    orderCol: {
        backgroundColor: '#ffffff',
        padding: '20px 40px',
    }
}
