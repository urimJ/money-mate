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
import { ButtonInput } from './FormDialogStyle';
import { useState } from 'react';
import { stepContentClasses } from '@mui/material';

const FormDialog = (props) => {
  const [open, setOpen] = useState(false);
  const [amnt, setAmnt] = useState();
  const [cntnt, setCntnt] = useState();
  //const amount = localStorage.getItem('amnt');
  //const content = localStorage.getItem('cntnt');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeAmnt = (e) => {
    setAmnt(e.target.value);
    
  }
  const handleChangeCntnt = (e) => {
    setCntnt(e.target.value);
    
  }
  
  const handleClose = (e) => {
    setOpen(false);
    localStorage.setItem('amnt', amnt);
    localStorage.setItem('cntnt', cntnt);

    const newData = [
      ...props.tableData,
      {
        date: '임시',
        content: cntnt, 
        amount: amnt, 
        group: "임시",
        paymentMethod: "임시",
      }
    ];

    props.updateTableData(newData);
    setAmnt('');
    setCntnt('');
    
  };

  

  const handleCloseDialog = () => {
    setOpen(false);
  };

  // const amount = amount

  return (
    <div>
      <ButtonInput  onClick={handleClickOpen}>
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
                label="내용"
                type="content"
                fullWidth
                variant="standard"
                //value={content}
                onChange={handleChangeCntnt}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="금액(원)"
                type="amount"
                fullWidth
                variant="standard"
                //value={amount}
                onChange={handleChangeAmnt}
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