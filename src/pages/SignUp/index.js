import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { handleSignUpState } from 'modules/user';
import * as S from './style';
import { emailRegExp } from 'utils';
import { API_URL } from 'config.js';

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    mobile: '',
  });
  const [isEmailValidation, setIsEmailValidation] = useState(true);

  const handleOnChangeSignUp = (e) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnBlurEmail = (e) => {
    if (emailRegExp.test(e.target.value)) {
      setIsEmailValidation(true);
    } else {
      setIsEmailValidation(false);
    }
  };

  const handleSignUp = async () => {
    const { password, passwordCheck, email } = signUpInfo;

    if (!emailRegExp.test(email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      inputRef.current.focus();
      return;
    }

    if (password.length < 8 || password.length > 15) {
      alert('비밀번호는 8~15자로 입력해야합니다.');
      return;
    }

    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/sign-up`, {
        email: signUpInfo.email,
        password: signUpInfo.password,
        mobile: signUpInfo.mobile,
      });

      dispatch(
        handleSignUpState({
          token: res.data.token,
        }),
      );

      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.SignUpForm>
        <S.EmailInput
          type="text"
          placeholder="이메일"
          name="email"
          onChange={handleOnChangeSignUp}
          onBlur={handleOnBlurEmail}
          ref={inputRef}
          isEmailValidation={isEmailValidation}
        />
        <S.PasswordInput
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={handleOnChangeSignUp}
          password={signUpInfo.password}
        />
        <S.PassWordCheckInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordCheck"
          onChange={handleOnChangeSignUp}
          passwordCheck={signUpInfo.passwordCheck}
        />
        <S.SignUpInput
          type="text"
          placeholder="연락처"
          name="mobile"
          onChange={handleOnChangeSignUp}
        />
      </S.SignUpForm>
      <S.SignUpButtonWrap>
        <S.SignUpButton onClick={handleSignUp}>가입하기</S.SignUpButton>
      </S.SignUpButtonWrap>
    </S.Container>
  );
}

export default SignUp;
