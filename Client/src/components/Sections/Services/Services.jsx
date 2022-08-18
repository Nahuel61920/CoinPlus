import React from "react";
import './services.css'
import bitcoin from '../../../assets/img/bit.png'

function Services() {
  return (
    <div id="Services">
      <h1 className="fw-bold text-center">Services</h1>
      <p className="text-center">What can you do in Coin+?</p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
            <div class="card-image">
              <img src={bitcoin} alt="bitcoin" width="100"/>
            </div>
            <div class="card-info">
              <p class="text-title">Autor</p>
              <p class="text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repellat, consequuntur doloribus voluptate esse iure?
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
            <div class="card-image"></div>
            <div class="card-info">
              <p class="text-title">Autor</p>
              <p class="text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repellat, consequuntur doloribus voluptate esse iure?
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div class="card-contain">
            <div class="card-image"></div>
            <div class="card-info">
              <p class="text-title">Autor</p>
              <p class="text-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti repellat, consequuntur doloribus voluptate esse iure?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
