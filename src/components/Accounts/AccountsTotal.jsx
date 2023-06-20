
import {
    AccountsBtnSearch,
    AccountsContHeader,
    AccountsGroupFromTo,
    AccountsSorting,
    AccountsContBody,
    AccountsTable,
    AccountsAmountColorSpending,
    AccountsTableHeadTh,
} from '../AccountsStyle';

import DatePicker from './components/Accounts/DatePickers';
import FormDialog from './components/Accounts/FormDialog';



function AccountsTotal() {
  return (
    <>
    <AccountsContHeader className="contHeader">
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
                <td className="widthFixed">2023-05-17</td>
                <td>박수련장인 베개</td>
                <AccountsAmountColorSpending className="colorAmount income">
                  50,000
                </AccountsAmountColorSpending>
                <td>생활용품</td>
                <td>카카오뱅크카드</td>
              </tr>
            </tbody>
          </AccountsTable>
        </AccountsContBody>
    </>
  )
}

export default AccountsTotal