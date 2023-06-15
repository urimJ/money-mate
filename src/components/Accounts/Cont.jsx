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
    // Yurim -----------------------------------------

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
                <FormDialog />
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
                    <AccountsTableHeadTh>그룹A</AccountsTableHeadTh>
                    <AccountsTableHeadTh>그룹B</AccountsTableHeadTh>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <AccountsTableBodyTd className="widthFixed">2023-05-17</AccountsTableBodyTd>
                    <AccountsTableBodyTd>박수련장인 베개</AccountsTableBodyTd>
                    <AccountsTableBodyTd className="colorAmount income">
                    50,000
                    </AccountsTableBodyTd>
                    <AccountsTableBodyTd>생활용품</AccountsTableBodyTd>
                    <AccountsTableBodyTd>카카오뱅크카드</AccountsTableBodyTd>
                </tr>
            </tbody>
            </AccountsTable>
        </AccountsContBody>
        </AccountsContainer>
        </>
    )
};

export default Cont