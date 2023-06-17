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
import { useState, useEffect } from 'react';
import { stepContentClasses } from '@mui/material';
import SelectVariantG from './SelectVariantG';

const FormDialog = (props) => {
  const [open, setOpen] = useState(false);
  const [amnt, setAmnt] = useState();
  const [cntnt, setCntnt] = useState();
  const [inOut, setInOut] = useState(''); //수입인지 지출인지 값을 저장하는 변수
  const [g1, setG1] = useState('');
  //const amount = localStorage.getItem('amnt');
  //const content = localStorage.getItem('cntnt');
  const [disableSubmit, setDisableSubmit] = useState(true); // 입력 버튼 비활성화 상태를 저장하는 변수

  useEffect(() => {
    if (amnt && cntnt && inOut) {
      // inOut 값이 'spending'인 경우에만 g1 값이 존재해야 합니다.
      if (inOut === 'spending' && !g1) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }
    } else {
      setDisableSubmit(true);
    }
  }, [amnt, cntnt, inOut, g1]);

  const handleInOutChange = (value) => {
    setInOut(value);
  };
  const handleGChange = (value) =>{
    let groupContent = value;

    if (inOut === 'spending') {
      if (groupContent === 'a') {
        setG1('식비');
      } else if (groupContent === 'b') {
        setG1('교통비');
      } else if (groupContent === 'c') {
        setG1('문화여가비');
      } else if (groupContent === 'd') {
        setG1('유흥비');
      } else if (groupContent === 'e') {
        setG1('기타');
      }
    } else {
      setG1('-'); // 수입인 경우 그룹을 비웁니다.
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeAmnt = (e) => {
    if (inOut === 'spending') {
      setAmnt(-e.target.value); // '지출'이 선택된 경우 amnt 값을 -amnt로 변경
    }else if(inOut ==='income'){
      setAmnt(e.target.value);
    }
  }

  
  const handleChangeCntnt = (e) => {
    setCntnt(e.target.value);
    
  }
  

  const handleClose = (e) => {
    setOpen(false);
    localStorage.setItem('amnt', amnt);
    localStorage.setItem('cntnt', cntnt);
    
    
    

    localStorage.setItem('g1', g1);

    const newData = [
      ...props.tableData,
      {
        date: '임시',
        content: cntnt, 
        amount: amnt, 
        group1: g1,
        paymentMethod: "임시",
      }
    ];

    props.updateTableData(newData);
    setAmnt('');
    setCntnt('');
    //setG1('');
    setInOut('');
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  

  return (
    <div>

      <ButtonInput  onClick={handleClickOpen}>
        입력
      </ButtonInput>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent>
            <DatePicker />
            <SelectVariants handleInOutChange={handleInOutChange}/>
            {inOut === 'spending' && <SelectVariantG handleGChange={handleGChange} />} {/* inOut 값이 'spending'인 경우에만 렌더링 */}
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
          <Button onClick={handleClose} disabled={disableSubmit}>입력</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog