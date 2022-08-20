import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({user}) {
  return (
    <Card style={{ width: '40rem' }}>
        <div className='d-flex justify-content-between p-5' style={{ background: 'linear-gradient(to bottom, #ffc107 0%, #e2f10e 100%)'}}> 
        <div className='d-flex align-items-center'>
        <Card.Title >{user.name}</Card.Title>
        </div>
      <Card.Img className='rounded-circle w-25 ' variant="top" src={user.picture}  />
        </div>
      <Card.Body>
        <Card.Text>Correo: {user.email}</Card.Text>
        <Card.Text>Idioma: {user.locale.slice(0,2)}</Card.Text>
        <Card.Text>Direccion: </Card.Text>
        <Card.Text>Telefono:</Card.Text>
        <Card.Text>Dni:</Card.Text>
        <Card.Text>País:</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;