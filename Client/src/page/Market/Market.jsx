import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

function Market() {
  return (
    <div>
      <Nav/>
        <div class="container-xxl my-4">
        <h1 className="fw-bold text-center">Market</h1>
        <p className="text-center">Precio de las criptomonedas de hoy</p>
        <div className='row d-flex align-items-center border-top border-bottom border-2 mt-4 pt-3 px-4'>
          <div className='col-1'>
            <p className='fw-bold'>#</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>Nombre</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>Precio</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>1h %</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>24h %</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>7d %</p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>Market Cap</p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>Volumen</p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>Ultimos 7 dias</p>
          </div>
        </div>
        <div className='row d-flex align-items-center border-top border-bottom border-2 pt-3 px-4'>
          <div className='col-1'>
            <p className='fw-bold'>1</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>Bitcoin <span>BTC</span></p>
          </div>
          <div className='col-1'>
            <p className='fw-bold'>$21,392.36</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold text-success'>0.23%</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold text-danger'>8.96%</p>
          </div>
          <div className='col-1'>
            <p className='fw-bold text-danger'>11.53%</p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>$409,541,420,841</p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>$37,358,911,826 <span>1,744,703 BTC</span></p>
          </div>
          <div className='col-2'>
            <p className='fw-bold'>Ultimos 7 dias</p>
          </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Market