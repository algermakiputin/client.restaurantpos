import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'; 
import { search, filterCategory } from '../../../product/productSlice';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function Searchbar() { 
  const dispatch = useDispatch();
  return (
    <Form style={{marginBottom: '10px'}}>
      <Row>
        <Col xs="8">
          <Form.Label htmlFor="searchbar" visuallyHidden>
            Search product...
          </Form.Label>
          <InputGroup className="mb-2"> 
            <Form.Control id="searchbar" autoComplete='off' placeholder="Search Product..." onKeyUp={(event) => dispatch(search(event.target.value))}/>
            <InputGroup.Text style={{padding:0, border:0}}><Button style={{borderRadius:0, background: "#2F80ED", borderColor: "#2F80ED"}}> Search</Button></InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs="4">
          <Form.Select onChange={(event) => dispatch(filterCategory(event.target.value))}>
            <option value="">Select category</option>
            <option value="1">Drinks & Beverage</option>
            <option value="2">Sumang Yakap</option>
            <option value="3">Hard drinks</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
}



export default Searchbar;