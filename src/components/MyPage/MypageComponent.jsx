import { useState } from 'react';
import {
  MyPageCategoryButton,
  MyPageCategoryInput,
  MyPageCategorySection,
  MyPageContainer,
  MyPageContentSection,
  MyPageProfileBox,
  MyPageProfileSection,
} from '../MyPageStyle';
import defaultProfile from '../../../public/images/defaultProfile.jpg';

const MypageComponent = () => {
  // 변수 선언
  const userName = localStorage.getItem('username');
  const [category, setCategory] = useState([
    { name: '식비' },
    { name: '교통비' },
    { name: '문화 여가비' },
    { name: '유흥비' },
    { name: '교육비' },
  ]);
  const categoryList = category.map((c) => {
    return <MyPageCategoryButton key={c.name}>{c.name}</MyPageCategoryButton>;
  });
  return (
    <>
      <MyPageContainer>
        <MyPageProfileSection>
          <MyPageProfileBox defaultProfile={defaultProfile} />
          {userName}님의 프로필
        </MyPageProfileSection>
        <MyPageContentSection>
          <MyPageCategoryInput
            type="text"
            placeholder="원하는 카테고리를 입력해주세요."
          />
          <MyPageCategorySection>{categoryList}</MyPageCategorySection>
        </MyPageContentSection>
      </MyPageContainer>
    </>
  );
};

export default MypageComponent;
