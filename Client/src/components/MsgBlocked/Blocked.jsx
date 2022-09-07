import React from "react";
import "./Blocked.css";
import blockedimg from "../../assets/img/blocked.jpg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import {SiGmail} from "react-icons/si";

function Blocked() {
  return (
    <div className="div-blocked d-flex text-center card container-sm">
      <h3 className="msg-block">
        Usted ha sido bloqueado temporalmente por incumplimiento de las normas
        preestablecidas. Si cree que ha sido un error, por favor comuniquese y a
        la brevedad analizaremos su caso.
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
            <i class="">
              <SiGmail className="wp-ico" />
            </i><span>Gmail</span>
          </button>
        </a>
        <a
          className="col-3"
          href="https://api.whatsapp.com/send?phone=5493815360966"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-wp">
            <i class="">
              <AiOutlineWhatsApp className="wp-ico" />
            </i><span>WhatsApp</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Blocked;
