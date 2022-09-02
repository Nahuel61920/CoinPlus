import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./profileCard.css";
import { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/reducers/cryptoRed";

function ProfileCard({ user }) {
  const dispatch = useDispatch();
  const { usuarios } = useSelector((state) => state.crypto);
  const [image, setImage] = useState("");
  const [number, setNumber] = useState("");
  const [countryes, setCountryes] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [dni, setDni ] = useState("");

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
    setImage(file.secure_url);
  };

  function HandlerUpdate(e) {
    let crear = {
      name: usuarios.name,
      email: usuarios.email,
      nickname: usuarios.nickname,
      picture: image,
      source: usuarios.source,
      numberPhone: number,
      country: countryes,
      postalCod: codigoPostal,
      documentNum: dni
    };
    dispatch(updateUser(crear));
  }

  return (
    <>
      {usuarios ? (
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
              src={usuarios.picture}
            />
          </div>

          <Card.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder={usuarios.email} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicIdioma">
              <Form.Label>Idioma</Form.Label>
              <Form.Control
                placeholder={usuarios.local ? usuarios.local : "Es"}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder={usuarios.name} disabled />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFecha">
              <Form.Label>Ultima fecha de ingreso:</Form.Label>
              <Form.Control
                placeholder={
                  user.updated_at.slice(0, 10) +
                  " " +
                  user.updated_at.slice(11, 19)
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

            {usuarios.documentNum === "" ? (
              <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={"Escriba su DNI"}
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="number"
                  placeholder={usuarios.documentNum}
                  value={usuarios.documentNum}
                  onChange={(e) => setDni(e.target.value)}
                  disabled
                />
              </Form.Group>
            )}

            {/* <Form.Group className="mb-3" controlId="formBasicDirection">
              <Form.Label>Direccion</Form.Label>
              <Form.Control type="text" placeholder={usuarios.direccion ? usuarios.direccion :"Escriba su direccion"} />
            </Form.Group> */}

            {usuarios.numberPhone === "" || "" ? (
              <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Escriba su telefono"}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3" controlId="formBasiPhone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={usuarios.numberPhone}
                  value={usuarios.numberPhone}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled
                />
              </Form.Group>
            )}

            {/* <Form.Group className="mb-3" controlId="formBasicDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="text" placeholder="Escriba su DNI" />
            </Form.Group> */}

            {usuarios.country === "" ? (
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Pais</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Escriba su pais"}
                  value={countryes}
                  onChange={(e) => setCountryes(e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Label>Pais</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={usuarios.country}
                  value={usuarios.country}
                  onChange={(e) => setCountryes(e.target.value)}
                  disabled
                />
              </Form.Group>
            )}

            {usuarios.postalCod === "" || "" ? (
              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={
                    "Escriba su codigo postal"
                  }
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                />
              </Form.Group>
            ) : (
              <Form.Group className="mb-3" controlId="formBasicUser">
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control
                  placeholder={
                    usuarios.postalCod
                  }
                  value={usuarios.postalCod}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  disabled

                />
              </Form.Group>
            )}

            <FormGroup controlId="formFileSm" className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Input
                type="file"
                name="file"
                placeholder="Sube tu imagen aqui!"
                onChange={uploadImage}
              />
            </FormGroup>

            <button onClick={(e) => HandlerUpdate(e)} className="btn-form-sum">
              Enviar
            </button>
          </Card.Body>
        </Card>
      ) : (
        <h1>no tengo usuario</h1>
      )}
    </>
  );
}

export default ProfileCard;
