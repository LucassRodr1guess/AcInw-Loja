import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';

function Sobre(){
    return(

        <div>
            
       

        <div>
            <h1>Produtos</h1>
        </div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

         </div>
    );
}
export default Sobre