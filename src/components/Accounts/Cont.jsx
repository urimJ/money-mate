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
} from '../AccountsStyle';

import DatePicker from './DatePickers';
import FormDialog from './FormDialog';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';


const Cont = (props) => {
    

    const userName = localStorage.getItem('username');
    // const [list, setList] = useState()
    // const group = [];
    // const lists = [
    //   {date: "", content:"", amount: "", group :"" },
    //   {},
    // ];

    // DatePicker 변수
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    // table 변수와 함수
    const [tableData, setTableData] = useState(
        JSON.parse(localStorage.getItem('tableData')) || []
    );

    // useEffect(() => {
    //     localStorage.setItem('tableData', JSON.stringify(tableData));
    // }, [tableData]);

    const updateTableData = useCallback((newData) => {
        setTableData(newData);
        localStorage.setItem('tableData', JSON.stringify(newData));
    }, []);

    return (
        <>
        <AccountsContainer>
        <AccountsContHeader className="contHeader">
            <AccountsTitle className="title">{userName}님의 가계부</AccountsTitle>
            <AccountsGroupFromTo className="groupFromTo">
                <DatePicker
                    className="btnFrom"
                    label={'시작 날짜'}
                    value={startDate}
                    onChange={(newValue)=>{
                    setStartDate(newValue);
                    console.log(startDate);
                    }}
                    />
                <AccountsSorting>부터</AccountsSorting>
                <DatePicker
                className="btnTo"
                label={'종료 날짜'}
                value={endDate}
                onChange={(newValue)=>{
                    setEndDate(newValue);
                    console.log(endDate);
                    }}
                />
                <AccountsSorting className="sorting">까지</AccountsSorting>
                <AccountsBtnSearch className="btnSearch">보기</AccountsBtnSearch>
                <FormDialog updateTableData={updateTableData} tableData={tableData}/>
            </AccountsGroupFromTo>
        </AccountsContHeader>
        <AccountsContBody className="contBody">
            <AccountsTable className="tableWidth">
            <thead>
                <tr>
                    <AccountsTableHeadTh className="widthFixed">
                        날짜
                    </AccountsTableHeadTh>
                    <AccountsTableHeadTh>내용</AccountsTableHeadTh>
                    <AccountsTableHeadTh>금액</AccountsTableHeadTh>
                    <AccountsTableHeadTh>항목</AccountsTableHeadTh>
                    <AccountsTableHeadTh>결제 수단</AccountsTableHeadTh>
                </tr>
            </thead>
            <tbody>
            {tableData.map((row, index) => (
                <tr key={index}>
                <AccountsTableBodyTd className="widthFixed">{row.date}</AccountsTableBodyTd>
                <AccountsTableBodyTd>{row.content}</AccountsTableBodyTd>
                <AccountsTableBodyTd className="colorAmount income">
                    {row.amount}
                </AccountsTableBodyTd>
                <AccountsTableBodyTd>{row.group}</AccountsTableBodyTd>
                <AccountsTableBodyTd>{row.paymentMethod}</AccountsTableBodyTd>
                </tr>
            ))}
            </tbody>
            </AccountsTable>
        </AccountsContBody>
        </AccountsContainer>
        </>
    )
};

export default Cont