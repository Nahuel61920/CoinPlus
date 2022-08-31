import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./profileCard.css";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/reducers/cryptoRed";

function ProfileCard({ user }) {
  const dispatch = useDispatch();
  const {usuarios} = useSelector((state) => state.crypto)


  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/coinplus/image/upload",

      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("file cloudinary---->", file);
    setImage(file.secure_url);
  };

  function HandlerUpdate(e) {
    console.log(e);
    dispatch(updateUser({ picture: image }));
  }

  return (
    <Card
      style={{ width: "40rem" }}
      className="my-3 animate__animated animate__backInLeft animate__delay-500ms p-0"
    >
      <div
        className="d-flex justify-content-between px-5 py-3 w-100"
        style={{
          background: "var(--bg-nav)",
        }}
      >
        <div className="d-flex align-items-center title-name">
          <Card.Title>{usuarios.nickname}</Card.Title>
        </div>
        <Card.Img
          class="img-profile"
          variant="top"
          src={image || user.picture}
        />
      </div>

      <Card.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder={user.email} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicIdioma">
          <Form.Label>Idioma</Form.Label>
          <Form.Control placeholder={user.local ? user.local : "Es"} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder={user.name} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFecha">
          <Form.Label>Ultima fecha de ingreso:</Form.Label>
          <Form.Control
            placeholder={
              user.updated_at.slice(0, 10) + " " + user.updated_at.slice(11, 19)
            }
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Logueado con:</Form.Label>
          <Form.Control
            placeholder={
              user.sub.charAt(0) === "a"
                ? user.sub.charAt(0).toUpperCase() + user.sub.slice(1, 5)
                : user.sub.charAt(0).toUpperCase() + user.sub.slice(1, 6)
            }
            disabled
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicDirection">
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

        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Escriba su usuario" />
        </Form.Group> */}

        <FormGroup controlId="formFileSm" className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Input
            type="file"
            name="file"
            placeholder="Sube tu imagen aqui!"
            onChange={uploadImage}
          />
        </FormGroup>

        <button
          onClick={(e) => HandlerUpdate(e)}
          className="btn-form-sum"
        >
          Submit
        </button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
