import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';

function Cards(){
    return(
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.discordapp.net/attachments/1052299157047623713/1113066190953263164/Untitled.png"  />
      <Card.Body>
        <Card.Title>Kit Completo - Roupa de Surf</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
            R$179,99
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <div>
    </div>
         </div>
    );
}
export default Cards