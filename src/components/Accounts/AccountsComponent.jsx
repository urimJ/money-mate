import {
AccountsBtnSearch,
AccountsContHeader,
AccountsContBody,
AccountsGroupFromTo,
AccountsSorting,
AccountsTitle,
AccountsTable,
AccountsTableHeadTh,
AccountsTableBodyTd,
AccountsContainer,
AccountsAmountColorSpending,
AccountsAmountColorIncome,
AccountsBtnClose,
EmptyTable,
EmptySpan,
DatePickerWrapper, 
Group
} from '../AccountsStyle';

import DatePicker from './DatePickers';
import FormDialog from './FormDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState, useRef } from 'react';
import { useCallback } from 'react';
import dayjs from 'dayjs';
import { primaryColor } from '../../../GlobalStyle';

const AccountsComponent = ({ navToggle }) => {
const userName = localStorage.getItem('username');

const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [isTableUpdated, setIsTableUpdated] = useState(false);
const prevTableDataRef = useRef();



const handleStartDateChange = (date) => {
    const formattedStartDate = dayjs(date).format('YYYY-MM-DD');
    console.log(formattedStartDate);
    setStartDate(formattedStartDate);
    setEndDate('');
};

const handleEndDateChange = (date) => {
    const formattedEndDate = dayjs(date).format('YYYY-MM-DD');
    setEndDate(formattedEndDate);
    
};

const updatedEndDate = startDate !== '' ? dayjs(startDate).add(1, 'day').format('YYYY-MM-DD') : '';

useEffect(() => {
    if (!isTableUpdated) {
    setEndDate(updatedEndDate);
    }
}, [startDate, isTableUpdated]);

const handleSearch = () => {
    if (startDate === '' || endDate === '') {
        alert('날짜를 모두 선택해야 합니다.');
        return; // 선택된 날짜가 없으면 아무 동작도 하지 않음
    }
    if (dayjs(endDate).isBefore(startDate, 'day') ) {
        alert("종료 날짜는 시작 날짜 이후로만 선택 가능합니다.")
        return;
    }

    const filteredData = tableData.filter((row) => {
    const rowDate = dayjs(row.date);
    return (
        rowDate.isSame(startDate, 'day') ||
        (rowDate.isAfter(startDate, 'day') &&
        rowDate.isBefore(dayjs(endDate).add(1, 'day'), 'day'))
    );
    });

    prevTableDataRef.current = tableData;
    updateTableData(filteredData);
    setIsTableUpdated(true);
};

const handleReset = () => {
    const prevTableData = prevTableDataRef.current;
    setStartDate('');
    setEndDate('');
    if (prevTableData) {
    updateTableData(prevTableData);
    }
    setIsTableUpdated(false);
};

const [tableData, setTableData] = useState(
    JSON.parse(localStorage.getItem('tableData')) || []
);
const updateTableData = useCallback((newData) => {
    const sortedData = newData.sort((a, b) => {
        const dateA = dayjs(a.date);
        const dateB = dayjs(b.date);
        return dateA.isBefore(dateB) ? -1 : 1;
    });
    setTableData(sortedData);
    localStorage.setItem('tableData', JSON.stringify(sortedData));
}, []);

useEffect(() => {
    if (!isTableUpdated) {
    setStartDate('');
    setEndDate('');
    }
}, [isTableUpdated]);

return (
    <>
    <AccountsContainer>
        <AccountsContHeader className="contHeader">
        <AccountsTitle className="title">{userName}님의 가계부</AccountsTitle>
        <AccountsGroupFromTo className="groupFromTo">
            <Group>
            {!isTableUpdated && (
            <>
            <DatePickerWrapper>
                <DatePicker
                //className={btnFrom.datePicker}
                label='시작 날짜'
                value={startDate}
                onDateChange={handleStartDateChange}
                />
            </DatePickerWrapper>
                <AccountsSorting>부터</AccountsSorting>
            <DatePickerWrapper>
                <DatePicker
                //className={btnTo.datePicker}
                label='종료 날짜'
                value={endDate}
                onDateChange={handleEndDateChange}
                minDate={startDate} 
                />
            </DatePickerWrapper>
                <AccountsSorting className="sorting">까지</AccountsSorting>
                <AccountsBtnSearch className="btnSearch" onClick={handleSearch} navToggle={navToggle}>
                보기
                </AccountsBtnSearch>
            </>
            )}
            
            {isTableUpdated && (
            <AccountsBtnClose className="closeButton" onClick={handleReset}>
                닫기
            </AccountsBtnClose>
            )}
            </Group>
            <FormDialog updateTableData={updateTableData} tableData={tableData} />
        </AccountsGroupFromTo>
        </AccountsContHeader>
        <AccountsContBody className="contBody">
            {tableData.length === 0? (
                <EmptyTable className = "emptyTableMessage">
                    <FontAwesomeIcon icon={faBoxOpen} size="8x" color= {primaryColor} />
                    <EmptySpan>내용이 없습니다.</EmptySpan>
                </EmptyTable>
            ):(
                <AccountsTable className="tableWidth">
            <thead>
            <tr>
                <AccountsTableHeadTh className="widthFixed">날짜</AccountsTableHeadTh>
                <AccountsTableHeadTh>내용</AccountsTableHeadTh>
                <AccountsTableHeadTh>금액</AccountsTableHeadTh>
                <AccountsTableHeadTh>항목</AccountsTableHeadTh>
                <AccountsTableHeadTh>비고</AccountsTableHeadTh>
            </tr>
            </thead>
            <tbody>
            {tableData.map((row, index) => (
                <tr key={index}>
                <AccountsTableBodyTd className="widthFixed">{row.date}</AccountsTableBodyTd>
                <AccountsTableBodyTd>{row.content}</AccountsTableBodyTd>
                {row.amount < 0 ? (
                    <AccountsAmountColorSpending className="colorAmount spending">
                    {-row.amount}
                    </AccountsAmountColorSpending>
                ) : (
                    <AccountsAmountColorIncome className="colorAmount income">
                    {row.amount}
                    </AccountsAmountColorIncome>
                )}
                <AccountsTableBodyTd>{row.group1}</AccountsTableBodyTd>
                <AccountsTableBodyTd>{row.paymentMethod}</AccountsTableBodyTd>
                </tr>
            ))}
            </tbody>
            </AccountsTable>
            )}
        
        </AccountsContBody>
    </AccountsContainer>
    </>
);
};

export default AccountsComponent;
