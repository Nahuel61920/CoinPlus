import Card from 'react-bootstrap/Card';
import './walletmini.css';
import Moneda from '../../assets/img/monedita.png'
import Billete from '../../assets/img/billetee.png'


function BasicExample() {
  return (
    <div className="cardWallet work">
    <div className="img-section d.flex justify-content-center" style={{backgroundImage: `url(${Billete})`,}}>
 </div>
    <div className="cardWallet-desc">
    <div className="cardWallet-header">
    <div className="cardWallet-title">BILLETERA</div>
    <div className="cardWallet-menu">
      </div>
    </div>
    <div className="cardWallet-time">Saldo disponible: $0.00</div>
  </div></div>
  );
}

export default BasicExample;