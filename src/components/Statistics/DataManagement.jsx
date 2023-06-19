import { useState } from 'react';

export const useLocalData = () => {
  const [localData, setLocalData] = useState({
    date: JSON.parse(localStorage.getItem('dateList')),
    spend: JSON.parse(localStorage.getItem('amntList')),
    Group:
      localStorage.getItem('selectedGroup') === 'Group1'
        ? JSON.parse(localStorage.getItem('g1List'))
        : localStorage.getItem('selectedGroup') === 'Group2'
        ? JSON.parse(localStorage.getItem('g2List'))
        : null,
  });
  return localData;
};
export const sumSpendByLabel = (startDate, endDate, localData) => {
  const { date, spend, Group } = localData;
  const spendByLabel = {};

  for (let i = 0; i < date.length; i++) {
    const currentDate = date[i];
    const spendValue = parseInt(spend[i]);
    const label = Group[i];

    if (currentDate >= startDate && currentDate <= endDate) {
      if (spendByLabel[label]) {
        spendByLabel[label] += spendValue;
      } else {
        spendByLabel[label] = spendValue;
      }
    }
  }
  const RspendByLabel = {};
  for (const key in spendByLabel) {
    RspendByLabel[key] = -spendByLabel[key];
  }

  return RspendByLabel;
};
