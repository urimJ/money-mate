import { useState } from 'react';
import {
  CategoryDeleteButton,
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
  MyPageInfoBox,
  MyPageProfileBox,
  MyPageProfileInput,
  MyPageProfileSection,
  MyPageRightSection,
  MyPageThemeToggle,
  MypageThemeDark,
  MypageThemeLight,
} from '../MyPageStyle';
import defaultProfile from '../../../public/images/defaultProfile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const MypageComponent = ({navToggle}) => {
  // 변수 선언------------------------------------------------
  const userName = localStorage.getItem('username');
  const { themeMode, setThemeMode, category, setCategory } =
    useContext(Context);
  const [newCategory, setNewCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Function------------------------------------------------
  const handleImageUpload = (e) => {
    let file = e.target.files[0];
    // 비동기적으로 파일 내용 읽어들이는 객체 선언
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(reader.result);
    };
    // base64로 이루어진 데이터 반환
    reader.readAsDataURL(file);
    console.log(reader.readAsDataURL(file));
  };
  // console.log(selectedImage);
  const handleImageSubmit = () => {
    // 등록 버튼 클릭 시 처리할 로직을 작성
    // 예를 들어, 등록된 사진을 서버에 전송하거나 다른 처리를 수행할 수 있음

    // 처리 완료 후 localStorage에서 등록 대기 중인 사진 제거
    localStorage.removeItem('pendingImage');
  };

  const handleImageCancel = () => {
    // 등록 취소 버튼 클릭 시 처리할 로직을 작성
    // 예를 들어, 등록 대기 중인 사진을 삭제하거나 다른 처리를 수행할 수 있음

    // 처리 완료 후 localStorage에서 등록 대기 중인 사진 제거
    localStorage.removeItem('pendingImage');
  };

  const handleImageLoad = () => {
    // 등록 대기 중인 사진이 localStorage에 있는지 확인
    const pendingImage = localStorage.getItem('pendingImage');
    if (pendingImage) {
      setSelectedImage(pendingImage);
    }
  };

  const handleThemeLight = () => {
    setThemeMode(false);
    localStorage.setItem('theme', false);
  };

  const handleThemeDark = () => {
    setThemeMode(true);
    localStorage.setItem('theme', true);
  };

  const onChangeCategory = (e) => {
    setNewCategory(e.target.value);
  };

  const onSubmitCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() === '') {
      alert('카테고리는 공백이 될 수 없습니다.');
      return;
    }
    const updatedCategory = [...category, { category: newCategory }];
    setCategory(updatedCategory);
    setNewCategory('');
    localStorage.setItem('category', JSON.stringify(updatedCategory));
  };
  const handleCategoryDelete = (idx) => {
    const updatedCategory = [...category];
    updatedCategory.splice(idx, 1);
    setCategory(updatedCategory);
    localStorage.setItem('category', JSON.stringify(updatedCategory));
  };

  //
  const categoryList = category?.map((c, idx) => {
    return (
      <MyPageCategoryButton key={c.category}>
        {c.category}
        <CategoryDeleteButton
          onClick={() => handleCategoryDelete(idx)}
          idx={idx}
        >
          X
        </CategoryDeleteButton>
      </MyPageCategoryButton>
    );
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
            <MyPageInfoBox>
              <MyPageInfo navToggle={navToggle}>{userName}님의 프로필</MyPageInfo>
              <MyPageThemeToggle navToggle={navToggle}>
                <MypageThemeLight
                  onClick={handleThemeLight}
                  themeMode={themeMode}
                >
                  <FontAwesomeIcon icon={faSun} />
                </MypageThemeLight>
                <MypageThemeDark
                  onClick={handleThemeDark}
                  themeMode={themeMode}
                >
                  <FontAwesomeIcon icon={faMoon} />
                </MypageThemeDark>
              </MyPageThemeToggle>
            </MyPageInfoBox>
            <MyPageCheckList>CHECK LIST</MyPageCheckList>
          </MyPageRightSection>
        </MyPageHeaderSection>
        <MyPageContentSection>
          <MyPageCategoryBox onSubmit={onSubmitCategory}>
            <MyPageCategoryInput
              type="text"
              placeholder="원하는 카테고리를 입력해주세요."
              name="category"
              onChange={onChangeCategory}
              value={newCategory}
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
