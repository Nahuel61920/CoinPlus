import React from "react";
import "./Blocked.css";
import blockedimg from "../../assets/img/blocked.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FormattedMessage } from "react-intl";

function Blocked() {
  return (
    <div className="div-blocked d-flex text-center card container-sm">
      <h3 className="msg-block">
        <FormattedMessage
          id="block-sms"
          defaultMessage="You have been temporarily blocked for breach of the pre-established rules. If you think it has been an error, please contact us and we will analyze your case as soon as possible."
        />
      </h3>
      <img src={blockedimg} alt="blocked-user" />

      <div className="div-btn-block justify-content-md-center d-flex">
        <a
          className="col-3"
          href="mailto:coinplusapp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-wp button-mail">
            <i className="">
              <SiGmail className="wp-ico" />
            </i>
            <span>Gmail</span>
          </button>
        </a>
        <a
          className="col-3"
          href="https://api.whatsapp.com/send?phone=5493815360966"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-wp">
            <i className="">
              <AiOutlineWhatsApp className="wp-ico" />
            </i>
            <span>WhatsApp</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blocked;
