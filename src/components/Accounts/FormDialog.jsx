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

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonInput className = "btnInput" onClick={handleClickOpen}>
        입력
      </ButtonInput>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>
            <DatePicker />
            <SelectVariants />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="금액"
                type="amout"
                fullWidth
                variant="standard"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose}>입력</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog