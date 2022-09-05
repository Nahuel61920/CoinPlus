import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./profileCard.css";
import { useState } from "react";
import { TbPencil, TbPencilOff } from "react-icons/tb";

import { FormGroup, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  getUser,
  postComent,
} from "../../redux/reducers/cryptoRed";
import { ImCamera } from "react-icons/im";

function ProfileCard({ user }) {
  const dispatch = useDispatch();
  const { usuarios } = useSelector((state) => state.crypto);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(usuarios ? usuarios.name : "");
  const [lastname, setLastname] = useState(usuarios ? usuarios.lastname : "");
  const [image, setImage] = useState("");
  const [number, setNumber] = useState(usuarios ? usuarios.numberPhone : "");
  const [countryes, setCountryes] = useState(usuarios ? usuarios.country : "");
  const [codigoPostal, setCodigoPostal] = useState(
    usuarios ? usuarios.postalCod : ""
  );
  const [dni, setDni] = useState(usuarios ? usuarios.documentNum : "");
  const [date, setDate] = useState(usuarios ? usuarios.date : "");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

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
      name: name,
      lastName: lastname,
      email: usuarios.email,
      nickname: usuarios.nickname,
      picture: image,
      source: usuarios.source,
      numberPhone: number,
      date: date,
      country: countryes,
      postalCod: codigoPostal,
      documentNum: dni,
      comments: comment,
    };
    dispatch(updateUser(crear));
    dispatch(getUser(user.email));
    setEdit(!edit);
    console.log(crear);
  }

  function HandlerComent(e) {
    let crear = {
      owner: usuarios.id,
      content: comment,
      name: usuarios.nickname,
      picture: usuarios.picture,
      rating: rating,
    };
    console.log("crear de comentario", crear);
    dispatch(postComent(crear));
  }

  function HandlerEdit() {
    setEdit(!edit);
  }

  return (
    <>
      {usuarios ? (
        <div className="row gap-4">
          <Card className="my-3 animate__animated animate__backInLeft animate__delay-500ms p-0 col-5">
            <div
              className="d-flex justify-content-between px-5 py-3 w-100"
              style={{
                background: "var(--bg-nav)",
              }}
            >
              <div className="edit_btn" onClick={HandlerEdit}>
                {edit === false ? <TbPencil /> : <TbPencilOff />}
              </div>

              <div className="d-flex align-items-center title-name">
                <Card.Title>{usuarios.nickname}</Card.Title>
              </div>
              <div className="update">
                <Card.Img
                  class="img-profile"
                  variant="top"
                  src={image || usuarios.picture}
                />
                <div className="round">
                  <Input type="file" name="file" onChange={uploadImage} />
                  <ImCamera fontSize={23} color="#fff" className="mb-1" />
                </div>
              </div>
            </div>

            <Card.Body key={usuarios.id}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder={usuarios.email} disabled />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicIdioma">
                <Form.Label>Idioma</Form.Label>
                <Form.Control
                  placeholder={usuarios.local ? usuarios.local : "Es"}
                  disabled
                />
              </Form.Group> */}

              <div className="row">
                {!usuarios.name || edit === true ? (
                  <Form.Group className="mb-3 col-6" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su Nombre"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasiName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={usuarios.name}
                      value={usuarios.name}
                      onChange={(e) => setName(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}

                {!usuarios.lastName || edit === true ? (
                  <Form.Group className="mb-3 col-6" controlId="formBasicName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su Apellido"}
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasiName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={usuarios.lastName}
                      value={usuarios.lastName}
                      onChange={(e) => setLastname(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}
              </div>

              <div className="row">
                <Form.Group className="mb-3 col-6" controlId="formBasicFecha">
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

                <Form.Group className="mb-3 col-6">
                  <Form.Label>Logueado con:</Form.Label>
                  <Form.Control
                    placeholder={
                      user.sub.charAt(0) === "a"
                        ? user.sub.charAt(0).toUpperCase() +
                          user.sub.slice(1, 5)
                        : user.sub.charAt(0).toUpperCase() +
                          user.sub.slice(1, 6)
                    }
                    disabled
                  />
                </Form.Group>
              </div>

              <div className="row">
                {!usuarios.documentNum || edit === true ? (
                  <Form.Group className="mb-3 col-4" controlId="formBasiDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su DNI"}
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-4" controlId="formBasiDNI">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={usuarios.documentNum}
                      value={usuarios.documentNum}
                      onChange={(e) => setDni(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}

                {!usuarios.date || edit === true ? (
                  <Form.Group className="mb-3 col-4" controlId="formBasiDate">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder={"Escriba su Fecha"}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-4" controlId="formBasiDate">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder={usuarios.date}
                      value={usuarios.date}
                      onChange={(e) => setDate(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}

                {!usuarios.numberPhone || edit === true ? (
                  <Form.Group className="mb-3 col-4" controlId="formBasiPhone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su telefono"}
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-4" controlId="formBasiPhone">
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
              </div>

              {/* <Form.Group className="mb-3" controlId="formBasicDirection">
              <Form.Label>Direccion</Form.Label>
              <Form.Control type="text" placeholder={usuarios.direccion ? usuarios.direccion :"Escriba su direccion"} />
            </Form.Group> */}

              <div className="row">
                {!usuarios.country || edit === true ? (
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="formBasicCountry"
                  >
                    <Form.Label>Pais</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su pais"}
                      value={countryes}
                      onChange={(e) => setCountryes(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="formBasicCountry"
                  >
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

                {!usuarios.postalCod || edit === true ? (
                  <Form.Group className="mb-3 col-6" controlId="formBasicUser">
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={"Escriba su codigo postal"}
                      value={codigoPostal}
                      onChange={(e) => setCodigoPostal(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasicUser">
                    <Form.Label>Codigo postal</Form.Label>
                    <Form.Control
                      placeholder={usuarios.postalCod}
                      value={usuarios.postalCod}
                      onChange={(e) => setCodigoPostal(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}
              </div>

              {/* <FormGroup controlId="formFileSm" className="mb-3">
                <Form.Label>Imagen</Form.Label>
                
              </FormGroup>
 */}
              {
                edit === true ? (
                <button
                  onClick={(e) => HandlerUpdate(e)}
                  className="btn-form-sum"
                >
                  Enviar
                </button> 
                ) : (
                  null
                )
              }
            </Card.Body>
          </Card>
          <Card className="animate__animated animate__backInRight animate__delay-500ms p-0 col-5">
            <div
              className="d-flex justify-content-center align-items-center py-4"
              style={{
                background: "var(--bg-nav)",
              }}
            >
              <h2 className="text-center">Deje un comentario</h2>
            </div>
            <form id="algin-form" className="p-3">
              <div class="form-group mb-3">
                <Form.Label for="message">Mensaje</Form.Label>
                <textarea
                  name="msg"
                  id=""
                  msg
                  cols="30"
                  rows="5"
                  class="form-control my-2"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div class="rating">
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  id="5"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label for="5">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  id="4"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label for="4">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  id="3"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label for="3">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  id="2"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label for="2">☆</label>
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  id="1"
                  onChange={(e) => setRating(e.target.value)}
                />
                <label for="1">☆</label>
              </div>
            </form>

            {
              !usuarios.name? (
                null
                ) : (
                  <button
                className="btn-form-sum mx-3 mb-3"
                onClick={(e) => HandlerComent(e)}
              >
                Enviar
              </button>
              )
            }
          </Card>
        </div>
      ) : (
        <h1>no tengo usuario</h1>
      )}
    </>
  );
}

export default ProfileCard;
