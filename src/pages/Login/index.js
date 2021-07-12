import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_URL } from 'config';
import * as S from './style';

function Login() {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const handleOnChangeLogin = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleOnLogin = async () => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (error) {
      if (error.message.includes('401')) {
        alert('비밀번호를 확인해주세요');
      }
    }
  };

  return (
    <S.Container>
      <S.LoginForm>
        <S.LoginInput
          type="text"
          placeholder="이메일"
          name="email"
          onChange={handleOnChangeLogin}
        />
        <S.LoginInput
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={handleOnChangeLogin}
        />
      </S.LoginForm>

      <S.LoginButtonWrap>
        <S.LoginButton onClick={handleOnLogin}>로그인</S.LoginButton>
      </S.LoginButtonWrap>
    </S.Container>
  );
}

export default Login;
