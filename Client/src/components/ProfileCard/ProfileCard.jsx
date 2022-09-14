import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./profileCard.css";
import { useState, useEffect } from "react";
import { TbPencil, TbPencilOff } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import load from "../../assets/img/load.gif";
import { Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  getUser,
  postComent,
} from "../../redux/reducers/cryptoRed";
import { ImCamera } from "react-icons/im";
import Blocked from "../MsgBlocked/Blocked";
import { validation } from "./Validations";
import swal from "sweetalert";
import { FormattedMessage } from "react-intl";

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

  const [charge, setCharge] = useState(false);

  const [errors, setErrors] = useState({});

  let regexName = /^[a-zA-Z ]+$/;
  let regexDoc = /^[0-9_-]{8,10}$/;
  let regexTel = /^[0-9_-]{10,12}$/;
  let regexPostal = /^[0-9_-]{4,10}$/;

  useEffect(() => {
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 2000);
  }, []);

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
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 2000);
  }

  function HandlerComent(e) {
    let crear = {
      owner: usuarios.id,
      content: comment,
      name: usuarios.nickname,
      picture: usuarios.picture,
      rating: rating,
    };
    dispatch(postComent(crear));
    swal("Your comment has been updated!", "", "success");
    setComment("");
  }

  function HandlerEdit() {
    setEdit(!edit);
  }

  function HandleValid(e) {
    setErrors(
      validation({
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <>
      {charge ? (
        <div className="d-flex justify-content-center my-5">
          <img src={load} alt="loading" height="200" className="my-5" />
        </div>
      ) : usuarios.blocked === false ? (
        <div className="row gap-4 justify-content-center">
          <Card className="my-3 animate__animated animate__backInLeft animate__delay-500ms p-0 col-12 col-md-5 card-formulario">
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
                  className="img-profile"
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

              <div className="row">
                {!usuarios.name || edit === true ? (
                  <Form.Group className="mb-3 col-6" controlId="formBasicName">
                    <Form.Label>
                      <FormattedMessage id="Nombre" defaultMessage="Name" />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="..."
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{name ? "" : errors.name}</strong>
                    <br />
                    <strong>
                      {!regexName.test(name) ? (
                        <FormattedMessage
                          id="Nombre-error-vali"
                          defaultMessage="The Name field only accepts letters"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasiName">
                    <Form.Label>
                      <FormattedMessage id="Nombre" defaultMessage="Name" />
                    </Form.Label>
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
                    <Form.Label>
                      <FormattedMessage
                        id="Apellido"
                        defaultMessage="Last Name"
                      />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="..."
                      value={lastname}
                      onChange={(e) => {
                        setLastname(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{lastname ? "" : errors.lastname}</strong>
                    <br />
                    <strong>
                      {!regexName.test(lastname) ? (
                        <FormattedMessage
                          id="Apellido-error-vali"
                          defaultMessage="The Surname field only accepts letters"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasiName">
                    <Form.Label>
                      <FormattedMessage
                        id="Apellido"
                        defaultMessage="Last Name"
                      />
                    </Form.Label>
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
                  <Form.Label>
                    <FormattedMessage
                      id="ingreso"
                      defaultMessage="Last entry date:"
                    />
                  </Form.Label>
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
                  <Form.Label>
                    <FormattedMessage
                      id="Logueado"
                      defaultMessage="Logged in with:"
                    />
                  </Form.Label>
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
                      placeholder="..."
                      value={dni}
                      onChange={(e) => {
                        setDni(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{dni ? "" : errors.dni}</strong>
                    <br />
                    <strong>
                      {!regexDoc.test(dni) ? (
                        <FormattedMessage
                          id="DNI-error-vali"
                          defaultMessage="The DNI field only accepts numeric characters with a minimum of 8"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
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
                    <Form.Label>
                      <FormattedMessage
                        id="Fecha"
                        defaultMessage="Date of birth"
                      />
                    </Form.Label>
                    <Form.Control
                      type="date"
                      placeholder={"Escriba su Fecha"}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-4" controlId="formBasiDate">
                    <Form.Label>
                      <FormattedMessage
                        id="Fecha"
                        defaultMessage="Date of birth"
                      />
                    </Form.Label>
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
                    <Form.Label>
                      <FormattedMessage id="Telefono" defaultMessage="Phone" />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="..."
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{number ? "" : errors.number}</strong>
                    <br />
                    <strong>
                      {!regexTel.test(number) ? (
                        <FormattedMessage
                          id="Telefono-error-vali"
                          defaultMessage="The Contact Number field only accepts numeric characters with a minimum of 10"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-4" controlId="formBasiPhone">
                    <Form.Label>
                      <FormattedMessage id="Telefono" defaultMessage="Phone" />
                    </Form.Label>
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

              <div className="row">
                {!usuarios.country || edit === true ? (
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="formBasicCountry"
                  >
                    <Form.Label>
                      <FormattedMessage id="Pais" defaultMessage="Country" />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="..."
                      value={countryes}
                      onChange={(e) => {
                        setCountryes(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{countryes ? "" : errors.countryes}</strong>
                    <br />
                    <strong>
                      {!regexName.test(countryes) ? (
                        <FormattedMessage
                          id="Pais-error-vali"
                          defaultMessage="The Country field only accepts letters"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
                  </Form.Group>
                ) : (
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="formBasicCountry"
                  >
                    <Form.Label>
                      <FormattedMessage id="Pais" defaultMessage="Country" />
                    </Form.Label>
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
                    <Form.Label>
                      <FormattedMessage
                        id="Postal"
                        defaultMessage="Postal Code"
                      />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="..."
                      value={codigoPostal}
                      onChange={(e) => {
                        setCodigoPostal(e.target.value);
                        HandleValid(e);
                      }}
                    />
                    <strong>{codigoPostal ? "" : errors.codigoPostal}</strong>
                    <br />
                    <strong>
                      {!regexPostal.test(codigoPostal) ? (
                        <FormattedMessage
                          id="Postal--error-vali"
                          defaultMessage="The Postal Code field only accepts numeric characters with a minimum of 4"
                        />
                      ) : (
                        ""
                      )}
                    </strong>
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3 col-6" controlId="formBasicUser">
                    <Form.Label>
                      <FormattedMessage
                        id="Postal"
                        defaultMessage="Postal Code"
                      />
                    </Form.Label>
                    <Form.Control
                      placeholder={usuarios.postalCod}
                      value={usuarios.postalCod}
                      onChange={(e) => setCodigoPostal(e.target.value)}
                      disabled
                    />
                  </Form.Group>
                )}
              </div>

              {edit === true &&
              name &&
              regexName.test(name) &&
              lastname &&
              regexName.test(lastname) &&
              codigoPostal &&
              regexPostal.test(codigoPostal) &&
              dni &&
              regexDoc.test(dni) &&
              number &&
              regexTel.test(number) &&
              countryes &&
              regexName.test(countryes) ? (
                <button
                  className="btn-form-save mx-3 mb-3"
                  onClick={(e) => HandlerUpdate(e)}
                >
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <FaSave />
                    </div>
                  </div>
                  <span>
                    <FormattedMessage id="btn-form" defaultMessage="Save" />
                  </span>
                </button>
              ) : null}
            </Card.Body>
          </Card>
          <Card className="animate__animated animate__backInRight animate__delay-1s p-0 col-12 col-md-5 card-comment">
            <div
              className="d-flex justify-content-center align-items-center py-4"
              style={{
                background: "var(--bg-nav)",
              }}
            >
              <h2 className="text-center">
                <FormattedMessage
                  id="comentario-title"
                  defaultMessage="Leave a comment"
                />
              </h2>
            </div>
            <form id="algin-form" className="p-3">
              <div className="form-group mb-3">
                <Form.Label for="message">
                  <FormattedMessage
                    id="comentario-sub"
                    defaultMessage="Message"
                  />
                </Form.Label>
                <textarea
                  name="msg"
                  id=""
                  msg
                  cols="30"
                  rows="5"
                  className="form-control my-2"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="rating">
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

            {!name && !usuarios.name ? (
              <button
                className="btn-form-comment mx-3 mb-3 btn-disabled"
                onClick={(e) => HandlerComent(e)}
                disabled
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <IoIosSend />
                  </div>
                </div>
                <span>
                  <FormattedMessage id="btn-comentario" defaultMessage="Send" />
                </span>
              </button>
            ) : (
              <button
                className="btn-form-comment mx-3 mb-3"
                onClick={(e) => HandlerComent(e)}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <IoIosSend />
                  </div>
                </div>
                <span>
                  <FormattedMessage id="btn-comentario" defaultMessage="Send" />
                </span>
              </button>
            )}
          </Card>
        </div>
      ) : (
        <Blocked />
      )}
    </>
  );
}

export default ProfileCard;
