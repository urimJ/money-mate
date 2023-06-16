import { useState } from 'react';
import {
  HiddenFileInput,
  MyPageCategoryBox,
  MyPageCategoryButton,
  MyPageCategoryInput,
  MyPageCategoryInputButton,
  MyPageCategorySection,
  MyPageCheckList,
  MyPageContainer,
  MyPageContentSection,
  MyPageHeaderSection,
  MyPageInfo,
  MyPageProfileBox,
  MyPageProfileInput,
  MyPageProfileSection,
  MyPageRightSection,
} from '../MyPageStyle';
import defaultProfile from '../../../public/images/defaultProfile.jpg';

const MypageComponent = () => {
  // 변수 선언------------------------------------------------
  const userName = localStorage.getItem('username');
  const [category, setCategory] = useState([
    { name: '식비' },
    { name: '교통비' },
    { name: '문화 여가비' },
    { name: '유흥비' },
    { name: '교육비' },
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function------------------------------------------------
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  //
  const categoryList = category.map((c) => {
    return <MyPageCategoryButton key={c.name}>{c.name}</MyPageCategoryButton>;
  });
  return (
    <>
      <MyPageContainer>
        <MyPageHeaderSection>
          <MyPageProfileSection>
            <MyPageProfileBox defaultProfile={defaultProfile} />
            <HiddenFileInput
              type="file"
              accept="image/*"
              id="upload-input"
              onChange={handleImageUpload}
            />
            <MyPageProfileInput htmlFor="upload-input">
              업로드
            </MyPageProfileInput>
          </MyPageProfileSection>
          <MyPageRightSection>
            <MyPageInfo>{userName}님의 프로필</MyPageInfo>
            <MyPageCheckList>CHECK LIST</MyPageCheckList>
          </MyPageRightSection>
        </MyPageHeaderSection>
        <MyPageContentSection>
          <MyPageCategoryBox>
            <MyPageCategoryInput
              type="text"
              placeholder="원하는 카테고리를 입력해주세요."
            />
            <MyPageCategoryInputButton>등록</MyPageCategoryInputButton>
          </MyPageCategoryBox>
          <MyPageCategorySection>{categoryList}</MyPageCategorySection>
        </MyPageContentSection>
      </MyPageContainer>
    </>
  );
};

export default MypageComponent;
