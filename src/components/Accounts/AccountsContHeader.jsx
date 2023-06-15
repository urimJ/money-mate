import {
    AccountsBtnSearch,
    AccountsContHeader,
    AccountsGroupFromTo,
    AccountsSorting,
    AccountsTitle,
} from './components/AccountsStyle';

import DatePicker from './components/Accounts/DatePickers';
import FormDialog from './components/Accounts/FormDialog';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';


const AccountsContHeader = () => {



    return (
        <>
        <AccountsContHeader className="contHeader">
            <AccountsTitle className="title">{userName}님의 가계부</AccountsTitle>
            <AccountsGroupFromTo className="groupFromTo">
                <DatePicker
                className="btnFrom"
                label={'시작 날짜'}
                // value={startDate}
                // onChange={(value)=>{
                //   setStartDate(value)
                //   console.log(userName, value);}}
                />
                <AccountsSorting>부터</AccountsSorting>
                <DatePicker
                className="btnTo"
                label={'종료 날짜'}
                // value={endDate}
                // onChange={(newValue) => {
                //   setEndDate(newValue);
                // }}
                />
                <AccountsSorting className="sorting">까지</AccountsSorting>
                <AccountsBtnSearch className="btnSearch">보기</AccountsBtnSearch>
                <FormDialog />
            </AccountsGroupFromTo>
        </AccountsContHeader>
        </>
    )
};

export default AccountsContHeader