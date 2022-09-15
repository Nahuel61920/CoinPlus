import React from "react";
import "./loginbtn.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function MarketBtn() {
  return (
    <Link to="/market" style={{ textDecoration: "none" }}>
      <button className="buttonLogin">
      <FormattedMessage
        id='Mercado'
        defaultMessage='Market'
      />
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </Link>
  );
}
