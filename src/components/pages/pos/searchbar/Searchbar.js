import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col, Row } from 'react-bootstrap';

function Searchbar() { 
    return (
      <Form style={{marginBottom: '10px'}}>
        <Row>
          <Col xs="8">
            <Form.Label htmlFor="searchbar" visuallyHidden>
              Search product...
            </Form.Label>
            <InputGroup className="mb-2"> 
              <Form.Control id="searchbar" placeholder="Search Product..." />
              <InputGroup.Text style={{padding:0, border:0}}><Button style={{borderRadius:0}}> Search</Button></InputGroup.Text>
            </InputGroup>
          </Col>
          <Col xs="4">
            <Form.Select>
              <option>Select category</option>
              <option>Drinks & Beverage</option>
              <option>Sumang Yakap</option>
              <option>Hard drinks</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
    );
}



export default Searchbar;