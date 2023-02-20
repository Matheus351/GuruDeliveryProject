import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Modal.css'

const ModalComponent = ({setProductSelected, removeProductSelected}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition:'all ease 0.5s',
        width: '80%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 0,
    };


  return (
    
    <div>

      
    </div>
   
   
  )
}

export default ModalComponent