import React from 'react'
import notificationsSvg from "../../../assets/svg/notificationsSvg.svg"

function Notifications() {
  return (
    <div id="Notifications" className="row aling-content-center justify-content-center d-flex flex-md-row flex-column min-vh-100">
      <h1 className="fw-bold text-center mt-4">Notificaciones</h1>
      <div className="col-12 col-md-6 my-5 container__img_header" data-aos="fade-right" data-aos-delay="650">
        <img src={notificationsSvg} alt="header"/>
      </div>
      <div className="col-12 col-md-6 text-end aling-content-center mt-5" data-aos="fade-left" data-aos-delay="300">
        <h4 className="fs-4 mt-5">Siempre informado.</h4>
        <h1 className="title__text fw-bold my-4">Recibe notificaciones</h1>
        <p className="fs-4">Cada vez que realices una transacción recibirás una notificación en tu correo electrónico.</p>
      </div>
    </div>
  )
}

export default Notifications