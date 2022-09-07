import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import metamaskLogo from '../../assets/img/metamask-logo.png';
import { TransactionContext } from '../../context/TransactionContext';

export default function Transference() {

  const { transactions } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    handleOtherChange,
    isLoading,
  } = useContext(TransactionContext);

  //colocar datos al estado para ejecutar transacción
  useEffect(() => {
    insertData()
  }, []);

  const insertData = () => {
    const data={
      addressTo: "0x86aC631914B824B8B1523F47942f30427a20F51A",
      amount: transactions.amountToSend.toString(),
      keyword: "1",
      message: "Default message001",
    }
    handleOtherChange(data)
    console.log("------>")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      addressTo: "0x86aC631914B824B8B1523F47942f30427a20F51A",
      amount: transactions.amountToSend.toString(),
      keyword: "1",
      message: "Default message001",
    }
    handleOtherChange(data)
    console.log(data)

    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }

  return (
    <div style={{height:'500px'}} className='container d-flex justify-content-center'>
        <div className="card">
            <div className="card-body d-flex flex-column justify-content-evenly">
                <h4 className="card-title text-center">{`Transfiere ahora ${transactions.kindOfOperation?"$":transactions.symbol} ${transactions.amountToSend} a Coin+`}</h4>
                <div className='d-flex justify-content-center p-5'>
                  <button 
                    onClick ={handleSubmit}
                    style={{width:'12rem'}} type='button' className='btn-primary'>Completar transaccion</button>
                </div>
                
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
