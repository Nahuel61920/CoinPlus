import React from 'react'
import { FormattedMessage } from "react-intl";

function FinalOperation() {
  return (
    <div style={{ height: '500px' }} className='container d-flex justify-content-center'>
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-evenly">
          <h4 className="card-title text-center"><FormattedMessage
            id='Confirmar-trans'
            defaultMessage='Your operation was successful!'
          /></h4>
        </div>
      </div>
    </div>
  )
}

export default FinalOperation