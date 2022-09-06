import React, {useState, useEffect} from "react";
import swal from 'sweetalert';
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { modifyTransaction } from "../../redux/reducers/cryptoRed";

function OperationDetail() {

  const { transactions } = useSelector(
    (state) => state.crypto
  );
  
  const dispatch = useDispatch();

  // function handleClickButton(){
  //   swal("Good job!", "You clicked the button!", "success")
  // }
  const { ethereum } = window;

  const [currentAccount, setCurrentAccount] = useState("");

  const ethereumAccounts = async () => {
    try {
      if (!ethereum) return alert("Por favor instale MetaMask.");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      setCurrentAccount(accounts);
    } else {
      console.log("No accounts found");
    }

    }
    catch(error){
      console.log("No accounts found");
    }
  }



  function handleChange(e) {

    const dataUpdated ={
      ...transactions,
      metamaskAccount:e.target.value,
    }
  
    dispatch(modifyTransaction(dataUpdated));
    console.log("------>")
    console.log(transactions)
  }

  console.log(currentAccount)
  useEffect(() => {
    ethereumAccounts()
  }, []);

  return (
    <div  className="col-5">
      <div  className="">
        <div  className="card-1 ">
          <div  className="card-body">
            <h4 className="card-title text-center mb-2">
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
                  <p>{`${transactions.kindOfOperation?"$":transactions.symbol} ${transactions.amountToSend}`}</p>
                  <p>{`${transactions.kindOfOperation?transactions.symbol:"$"} ${transactions.amountToReceive}`}</p>
                </div>
              </div>
              <div className="row mt-3 border-bottom">
              <p>{`Tipo de cambio utilizado $ ${transactions.rateExchange}`}</p>
              </div>
            </div>
             {/* Segunda seccion */}
             <div className="container text-center">
              <div className="row">
                <p>¿Desde donde nos envía tu dinero?</p>
                {transactions.kindOfOperation
                ?(<select  name="select" id="">
                    <option value="">Paypal</option>
                  </select>)
                :(<select  name="select" id="" onChange={handleChange}>
                  <option value="">Metamask</option>
                  {
                    currentAccount.length>0
                    ?currentAccount.map((e,index) =>{
                        return(
                          <option key={index}>{e}</option>
                        );
                    })
                    :(<option></option>)
                  }
                </select>)
                }
              </div>
              <div className="row">
                <p>¿En qué cuenta deseas recibir tu dinero?</p>
                {!transactions.kindOfOperation
                ?(<select  name="select" id="">
                    <option value="">Paypal</option>
                  </select>)
                :(<select  name="select" id="" onChange={handleChange}>
                  <option value="">Metamask</option>
                  {
                    currentAccount.length>0
                    ?currentAccount.map((e,index) =>{
                        return(
                          <option key={index}>{e}</option>
                        );
                    })
                    :(<option></option>)
                  }
                </select>)
                }
              </div>
             </div>
          </div>
          <div className="container text-center d-flex justify-content-center mb-2">
            <div className="row">
            {/* <button style={{width:'90px'}} onClick={handleClickButton}>Continuar</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperationDetail;