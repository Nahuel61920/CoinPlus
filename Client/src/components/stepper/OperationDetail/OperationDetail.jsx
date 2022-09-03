import React from "react";

function OperationDetail() {
  return (
    <div className="container-fluid ">
      <div className="container d-flex justify-content-center">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-center">
              Completa los datos de tu operación
            </h4>
            {/* Primera seccion */}
            <div className="container text-center">
              <div className="row ">
                <div className="col">
                  <p>Tu envias</p>
                  <p>Tu Recibes</p>
                </div>
                <div className="col ">
                  <p>$38.50</p>
                  <p>$10</p>
                </div>
              </div>
              <div className="row mt-3 border-bottom">
              <p>Tipo de cambio utilizado 3890</p>
              </div>
            </div>
             {/* Segunda seccion */}
             <div className="container text-center">
              <div className="row">
                <p>¿Desde qué banco nos envía tu dinero?</p>
                <select  name="select" id="">
                  <option value="">Paypal</option>
                </select>
              </div>
              <div className="row">
                <p>¿En qué cuenta deseas recibir tu dinero?</p>
                <select  name="select" id="">
                  <option value="">Metamask</option>
                </select>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperationDetail;
