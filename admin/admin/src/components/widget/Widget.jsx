import React from './widget.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount =100;
  const diff =20;
switch(type){
case "user":
    data = {
    title:"USERS",
    isMoney:false,
    link:"See all users",
    icon:<PersonIcon className='icon'  />,
    };
    break;

case "order":
    data = {
        title:"ORDERS",
        isMoney:false,
        link:"See all orders",
        icon:<ShoppingCartIcon className='icon'/>,
    };
    break;
case "earning":
data = {
            title:"EARNINGS",
            isMoney:true,
            link:"View net earnings",
            icon:<MonetizationOnIcon className='icon'/>,
        };
        break;
                
case "balance":
data = {
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletIcon className='icon'/>,
    };
break;
default:
break;

}
    return (
    <div className='widget'>
        <div className="left">
           <span className="title">{data.title}</span>
           <span className="counter">{data.isMoney && "$"}{amount}</span>
           <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ExpandLessIcon/>
               {diff}%
            </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widget