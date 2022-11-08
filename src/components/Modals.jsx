import React, { useEffect, useState } from 'react';
// import  "./App.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Modals({ country}) {

    const [data, setData] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const fetchData = async () => {

        try {
    
            let res = await fetch(`https://restcountries.com/v3.1/name/${country}`),
            data = await res.json();
            console.log(data);
            setData(data);
        }
        catch (err) {
            console.log('error:', err);
        }
      }
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div>
        <Button className='more' onClick={handleOpen}>More Details</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" display="flex" component="h2">
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
      {
        data && data[0].area 
      }
      <br />
       <p>Borders share :</p>
      {
        data && data[0].borders
      }
       <br />
       <p>Sub-region :</p>
      {
        data && data[0].subregion
      }
      
      <a href={`/`}>
              <button className='btn'>Back to home</button>
            </a>
    </Typography>
  </Box>
</Modal>

    </div>
  )
}

export default Modals