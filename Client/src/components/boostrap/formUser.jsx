import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Escriba su usuario" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Escriba su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDirection">
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" placeholder="Escriba su direccion" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Escriba su telefono" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text" placeholder="Escriba su DNI" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCountry">
        <Form.Label>Pais</Form.Label>
        <Form.Control type="text" placeholder="Escriba su pais" />
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample; 