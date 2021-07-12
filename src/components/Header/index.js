import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './style';
import logo from 'images/alresioLogo.png';
import menuIcon from 'images/menuIcon.jpg';

function Header() {
  const [clickdId, setClickdId] = useState('');
  const [isViewMenu, setIsViewMenu] = useState(false);
  const history = useHistory();
  const location = window.location.pathname;

  const handleOnClickGoPage = (e) => {
    const { id } = e.target;
    if (id === null) history.push(`/`);
    history.push(`/${id}`);
    setClickdId(id);
  };

  const handleOnClickViewMenu = () => {
    setIsViewMenu(!isViewMenu);
  };

  useEffect(() => {
    if (location === '/') setClickdId('');
  }, [location]);

  return (
    <S.Container>
      <S.MobileContainer isViewMenu={isViewMenu}>
        <S.MenuWrap isViewMenu={isViewMenu} onClick={handleOnClickViewMenu}>
          <S.MenuItem>
            <S.MenuContent
              id="login"
              onClick={handleOnClickGoPage}
              clickdId={clickdId}
            >
              로그인
            </S.MenuContent>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuContent
              id="sign-up"
              onClick={handleOnClickGoPage}
              clickdId={clickdId}
            >
              회원가입
            </S.MenuContent>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuContent
              id="mypage/order"
              onClick={handleOnClickGoPage}
              clickdId={clickdId}
            >
              마이페이지
            </S.MenuContent>
          </S.MenuItem>
        </S.MenuWrap>
      </S.MobileContainer>

      <S.LogoWrap onClick={handleOnClickGoPage}>
        <img src={logo} alt="메인 로고 이미지" />
      </S.LogoWrap>

      <S.MenuWrap>
        <S.MenuItem>
          <S.MenuContent
            id="login"
            onClick={handleOnClickGoPage}
            clickdId={clickdId}
          >
            로그인
          </S.MenuContent>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuContent
            id="sign-up"
            onClick={handleOnClickGoPage}
            clickdId={clickdId}
          >
            회원가입
          </S.MenuContent>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuContent
            id="mypage/order"
            onClick={handleOnClickGoPage}
            clickdId={clickdId}
          >
            마이페이지
          </S.MenuContent>
        </S.MenuItem>
      </S.MenuWrap>

      <S.MenuIconWrap>
        <img src={menuIcon} alt="메뉴 이미지" onClick={handleOnClickViewMenu} />
      </S.MenuIconWrap>
    </S.Container>
  );
}

export default withRouter(Header);
