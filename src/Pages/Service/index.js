import * as S from './style';
import babyFace from '../../images/babyFace.png';
import { useHistory } from 'react-router-dom';

function Service() {
  const history = useHistory();

  const handleOnOrder = () => {
    if (localStorage.getItem('token')) {
      alert('주문 성공');
    } else {
      alert('로그인필요');
      history.push('/login');
    }
  };

  return (
    <S.Container>
      <S.MainContentWrap>
        <img src={babyFace} alt="메인 아이템 이미지" />
      </S.MainContentWrap>
      <S.OrderButtonWrap>
        <S.OrderButton onClick={handleOnOrder}>주문하기</S.OrderButton>
      </S.OrderButtonWrap>
    </S.Container>
  );
}

export default Service;
