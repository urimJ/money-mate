const LocalData = {
  date: JSON.parse(localStorage.getItem('date')),
  spend: JSON.parse(localStorage.getItem('spend')),
  Group: JSON.parse(localStorage.getItem('Group2')),
};

const ReduceLabels = [...new Set(LocalData.Group)];
const startDate = localStorage.getItem('startDate');
const endDate = localStorage.getItem('endDate');

const sumSpendByLabel = (startDate, endDate) => {
  const { date, spend, Group } = LocalData;

  // startDate와 endDate 사이의 인덱스를 찾기
  const startIndex = date.indexOf(startDate);
  const endIndex = date.indexOf(endDate) + 1;

  // spend와 labels 값을 startDate와 endDate에 해당하는 부분으로 잘라내기
  const spendSubset = spend.slice(startIndex, endIndex);
  const GroupSubset = Group.slice(startIndex, endIndex);

  // 같은 labels를 가진 spend 값의 합을 계산하기 위해 객체를 사용
  const spendByLabel = {};

  for (let i = 0; i < GroupSubset.length; i++) {
    const label = GroupSubset[i];
    const spendValue = parseInt(spendSubset[i]);

    if (spendByLabel[label]) {
      spendByLabel[label] += spendValue;
    } else {
      spendByLabel[label] = spendValue;
    }
  }

  return spendByLabel;
};

const SpendData = ReduceLabels.map(
  (label) => sumSpendByLabel(startDate, endDate)[label]
);

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Group1', // 선택된 그룹에 따라 제목 변경
    },
  },
};

export const Chartdata2 = {
  labels: ReduceLabels,
  datasets: [
    {
      label: '지출 금액',
      data: SpendData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
