import React from 'react'
import notificationsSvg from "../../../assets/svg/notificationsSvg.svg"
import { FormattedMessage } from "react-intl";

function Notifications() {
  return (
    <div id="Notifications" className="row aling-content-center justify-content-center d-flex flex-md-row flex-column min-vh-100">
      <h1 className="fw-bold text-center mt-4"><FormattedMessage
        id='Notificaciones'
        defaultMessage='Notifications'
      /></h1>
      <div className="col-12 col-md-6 my-5 container__img_header" data-aos="fade-right" data-aos-delay="650">
        <img src={notificationsSvg} alt="header" />
      </div>
      <div className="col-12 col-md-6 text-end aling-content-center mt-5" data-aos="fade-left" data-aos-delay="300">
        <h4 className="fs-4 mt-5"><FormattedMessage
          id='notifi-sub'
          defaultMessage='Always informed.'
        /></h4>
        <h1 className="title__text fw-bold my-4"><FormattedMessage
          id='notifi-title'
          defaultMessage='Receive notifications'
        /></h1>
        <p className="fs-4"><FormattedMessage
          id='notifi-par'
          defaultMessage='Every time you make a transaction you will receive a notification in your email.'
        /></p>
      </div>
    </div>
  )
}

export default Notifications