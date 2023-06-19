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
import { ButtonInput, SelectedVariantsSpending } from './FormDialogStyle';
import { useState, useEffect } from 'react';
import { stepContentClasses } from '@mui/material';
import SelectVariantG from './SelectVariantG';
import SelectVariantG2 from './SelectVariantG2';
import dayjs from 'dayjs';

const FormDialog = (props) => {
  const [open, setOpen] = useState(false);
  const [amnt, setAmnt] = useState();
  const [cntnt, setCntnt] = useState();
  const [inOut, setInOut] = useState(''); //수입인지 지출인지 값을 저장하는 변수
  const [g1, setG1] = useState('');
  const [g2, setG2] =useState('');
  //const amount = localStorage.getItem('amnt');
  //const content = localStorage.getItem('cntnt');
  const [disableSubmit, setDisableSubmit] = useState(true); // 입력 버튼 비활성화 상태를 저장하는 변수
  const [selectedDate, setSelectedDate] = useState(null); // 선택한 날짜를 저장하는 상태 추가

  const amntList = JSON.parse(localStorage.getItem('amntList')) || [];
  const cntntList = JSON.parse(localStorage.getItem('cntntList')) || [];
  const dateList = JSON.parse(localStorage.getItem('dateList')) || [];
  const g1List = JSON.parse(localStorage.getItem('g1List')) || [];
  const g2List = JSON.parse(localStorage.getItem('g2List')) || [];

  useEffect(() => {
    if (amnt && cntnt && inOut) {
      // inOut 값이 'spending'인 경우에만 g1, g2 값이 존재해야 합니다.
      if (inOut === 'spending' && !(g1 && g2)) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }
    } else {
      setDisableSubmit(true);
    }
  }, [selectedDate, amnt, cntnt, inOut, g1, g2]);

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

  const handleG2Change = (value) =>{
    let groupContent = value;
    
    if (inOut === 'spending') {
      if (groupContent === 'a') {
        setG2('신한카드');
      } else if (groupContent === 'b') {
        setG2('카카오뱅크카드');
      } else if (groupContent === 'c') {
        setG2('BC카드');
      } else if (groupContent === 'd') {
        setG2('현대카드');
      } else if (groupContent === 'e') {
        setG2('현금');
      }
    } else {
      setG2('-'); // 수입인 경우 그룹을 비웁니다.
    }
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeAmnt = (e) => {
    const value = e.target.value;
    // if(value===String){
    //   alert("금액 란에는 숫자만 입력 가능합니다.")
    // }
    const numericValue = value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거

  if (inOut === 'spending') {
    setAmnt(-numericValue); // '지출'이 선택된 경우 음수로 설정
  } else if (inOut === 'income') {
    setAmnt(numericValue);
  } else {
    setAmnt('');
  }
  }

  
  const handleChangeCntnt = (e) => {
    setCntnt(e.target.value);
    
  }
  

  const handleClose = (e) => {
    if (selectedDate === null) {
      alert("날짜를 선택하세요.");
      return;
    }
    setOpen(false);
    localStorage.setItem('amnt', amnt);
    localStorage.setItem('cntnt', cntnt);
    console.log(selectedDate);
    
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    
    amntList.push(amnt);
    cntntList.push(cntnt);
    dateList.push(formattedDate);
    g1List.push(g1);
    g2List.push(g2);

    localStorage.setItem('amntList', JSON.stringify(amntList));
    localStorage.setItem('cntntList', JSON.stringify(cntntList));
    localStorage.setItem('dateList', JSON.stringify(dateList));
    localStorage.setItem('g1List', JSON.stringify(g1List));
    localStorage.setItem('g2List', JSON.stringify(g2List));

    const newData = [
      ...props.tableData,
      {
        date: formattedDate,
        content: cntnt, 
        amount: amnt, 
        group1: g1,
        paymentMethod: g2,
      }
    ];

    props.updateTableData(newData);
    setAmnt('');
    setCntnt('');
    setG1('');
    setG2('')
    setInOut('');
    setSelectedDate(null);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // 선택한 날짜 업데이트
  };
  

  return (
    <div>

      <ButtonInput  onClick={handleClickOpen}>
        입력
      </ButtonInput>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent>
            <DatePicker 
              value={selectedDate} // 선택한 날짜를 제어되는 값으로 설정
              onDateChange={handleDateChange}/>
            <SelectVariants handleInOutChange={handleInOutChange}/>
            {inOut === 'spending' && (
              <SelectedVariantsSpending>
                <SelectVariantG handleGChange={handleGChange} />
                <SelectVariantG2 handleG2Change={handleG2Change} />
              </SelectedVariantsSpending>
            )}
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
                label="금액(원) (숫자만 입력)"
                type="amount"
                fullWidth
                variant="standard"
                //value={amount}
                onChange={handleChangeAmnt}
                inputProps={{
                  pattern: '[0-9]*', // 숫자만 입력 가능하도록 설정
                  inputMode: 'numeric', // 모바일 키보드 형식 설정
                }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>취소</Button>
          <Button onClick={handleClose} disabled={disableSubmit}>확인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog