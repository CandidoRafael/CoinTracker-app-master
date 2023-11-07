import { useState } from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

function ModalGoal({open, children}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid green',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
      };
    
      
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {children}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalGoal