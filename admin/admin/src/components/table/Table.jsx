import React from './table.scss'
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import img from './happy-couple-enjoying-drive-on-new-car-scaled.jpg';
import  './happy-couple-enjoying-drive-on-new-car-scaled.jpg';
import './106513.png';
import './106517.png';

const List = () => {
  
  const rows = [
    {
      id : 1143155 ,
      img:"https://www.amigo.tn/wp-content/uploads/2022/08/young-entrepreneur-leaving-taxi-rain-scaled.jpg",
      product : "Acer Nitro 5",
      customer : "John Smth",
      date : "1 March" ,
      ammount : 785,
      method: "Cash on delevery",
      status:"Approved",

    },
    {
      id : 1143145 ,
      product : "Telephone",
      img:"./106517.png",
      customer : "John Smth",
      date : " 5March" ,
      ammount : 665,
      method: "Cash on delivery",
      status:"Approved",

    },
    {
      id : 1143144,
      img:"./106513.png",
      product : "Smart",
      customer : "Achour Siwar",
      date : "1 March" ,
      ammount : 445,
      method: "Cash on delevery",
      status:"Pending",

    },
  ];
  return (
    
    <TableContainer component={Paper} className='table'>
    <Table sx={{minWidth:650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Traking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>ammount</TableCell>
          <TableCell className='tableCell'>method</TableCell>
          <TableCell className='tableCell'>status</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className='tableCell'> {row.id} </TableCell>
            <TableCell className='tableCell'>
              <div className="cellWrapper">
                <img src={row.img} alt="" className='image'/>
                {row.product}

              </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.ammount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'>
              <span className={`status ${row.status}`}>{row.status}</span>  
            </TableCell>
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
       
  )
}

export default List;