import React from 'react';
import  './SeatSelectPage.css';

import Modal from '@material-ui/core/Modal';

import { Button } from 'antd';
import TheaterComedySharpIcon from '@mui/icons-material/TheaterComedySharp';

function SeatSelectPage() {

  let R = 1, C = 253;



 const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
    
  

  return (
      
    <div style={{ display: 'block', padding: 30 }}>
      
      <Button type="button" 
        onClick={handleOpen}>
        Click Me to Open Modal
      </Button>

      <Modal
        onClose={handleClose}
        open={open}
      className='SeatContainer'
       
      >
     
        <div className='SeatContainer1'>

       <span className='SeatContainerselection'>How many seats ?</span>
       <TheaterComedySharpIcon className='SeatContainerTheaterIcon' />
       <div className='SeatContainerTheaterSeats'>
         {[...Array(R)].map((R, Rindex) => (

           [...Array(C)].map((C, Cindex) => (
             <span className='SeatContainerTheaterSeatsnum'>{Cindex + 1}</span>
           ))

         ))
         }
       </div>
       <Button className='SeatContainerSeatSelected'>Select seats</Button>

     </div>
</Modal>
    </div>
  );

}

export default SeatSelectPage;














