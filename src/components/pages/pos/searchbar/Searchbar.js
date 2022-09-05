import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Col } from 'react-bootstrap';

function Searchbar() { 
    return (
      <Form style={{marginBottom: '20px'}}>
        <Col xs="8">
          <Form.Label htmlFor="searchbar" visuallyHidden>
            Search product...
          </Form.Label>
          <InputGroup className="mb-2"> 
            <Form.Control id="searchbar" placeholder="Search Product..." />
            <InputGroup.Text style={{padding:0, border:0}}><Button style={{borderRadius:0}}> Search</Button></InputGroup.Text>
          </InputGroup>
        </Col>
      </Form>
    );
}



export default Searchbar;