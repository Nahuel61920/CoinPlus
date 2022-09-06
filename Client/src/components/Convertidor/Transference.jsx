import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import metamaskLogo from '../../assets/img/metamask-logo.png';
import { TransactionContext } from '../../context/TransactionContext';

export default function Transference() {

  const { transactions } = useSelector((state) => state.crypto);

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    handleOtherChange,
    isLoading,
  } = useContext(TransactionContext);

  const insertData = () => {
    const data={
      addressTo: "0x86aC631914B824B8B1523F47942f30427a20F51A",
      amount: transactions.amountToSend.toString(),
      keyword: "123",
      message: "Default message",
    }
    handleOtherChange(data)
    console.log(data)
  }
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();
    console.log("---->pase01")
    console.log(formData)
    if (!addressTo || !amount || !keyword || !message) return;
    console.log("---->pase02")
    sendTransaction();
  };

  return (
    <div style={{height:'500px'}} className='container d-flex justify-content-center'>
        <div className="card">
            <div className="card-body d-flex flex-column justify-content-evenly">
                <h4 className="card-title text-center">{`Transfiere ahora ${transactions.kindOfOperation?"$":transactions.symbol} ${transactions.amountToSend}`}</h4>
                <div className='d-flex justify-content-center p-5'>
                  <button 
                    onClick ={insertData}
                    style={{width:'12rem'}} type='button' className='btn-primary'>Completar transaccion</button>
                </div>
                <button 
                    onClick ={handleSubmit}
                    style={{width:'12rem'}} type='button' className='btn-primary'>Completar transaccion</button>
                
                  <div className="container text-center">
                    <img style={{width:'6rem'}} src={metamaskLogo} alt='' className='mb-5'/>
                    <h6>Tiempo de espera : 15m</h6>
                    <p>Este es un mensaje para la comunidad de twich</p>
                  </div>
            </div>
        </div>
    </div>
  )
}
