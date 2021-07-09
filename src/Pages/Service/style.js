import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and(max-width: 414px ) {
    height: 250px;
  }
`;

export const MainContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 414px;
  height: 100%;
  margin-bottom: 10px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const OrderButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OrderButton = styled.button`
  width: 200px;
`;
