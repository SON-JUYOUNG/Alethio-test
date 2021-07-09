import styled from 'styled-components';

export const Container = styled.div``;

export const SignUpForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpInput = styled.input`
  width: 200px;
  margin: 5px 0;
  border: 1px solid black;
`;

export const EmailInput = styled(SignUpInput)`
  border-color: ${({ isEmailValidation }) =>
    isEmailValidation ? `black` : `red`};
`;

export const PasswordInput = styled(SignUpInput)`
  border-color: ${({ password }) =>
    password.length >= 8 && password.length <= 15 ? `red` : `black`};
`;

export const PassWordCheckInput = styled(SignUpInput)`
  border-color: ${({ passwordCheck }) =>
    passwordCheck.length >= 8 && passwordCheck.length <= 15 ? `red` : `black`};
`;

export const SignUpButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpButton = styled.button`
  width: 200px;
`;
