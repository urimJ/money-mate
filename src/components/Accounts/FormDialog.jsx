import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import SelectVariants from './SelectVariants'
import DatePicker from './DatePickers'
import { ButtonInput } from './FromDialogStyle';
import { useState } from 'react';

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [amnt, setAmnt] = useState();
  const amount = localStorage.getItem('amnt');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setAmnt(e.target.value);
  }
  const handleClose = (e) => {
    setOpen(false);
    localStorage.setItem('amnt', amnt);
    
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  // const amount = amount

  return (
    <div>
      <ButtonInput className = "btnInput" onClick={handleClickOpen}>
        입력
      </ButtonInput>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent>
            <DatePicker />
            <SelectVariants />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="금액(원)"
                type="amount"
                fullWidth
                variant="standard"
                value={amount}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>취소</Button>
          <Button onClick={handleClose}>입력</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog