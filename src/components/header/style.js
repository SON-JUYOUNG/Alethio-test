import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileContainer = styled.div`
  display: ${({ isViewMenu }) => (isViewMenu ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;

  @media screen and (min-width: 414px) {
    display: none;
  }
`;

export const LogoWrap = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuWrap = styled.ul`
  display: flex;

  @media screen and (max-width: 414px) {
    display: ${({ isViewMenu }) => (isViewMenu ? 'block' : 'none')};
    width: 100%;
    height: 100px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  cursor: pointer;
`;

export const MenuContent = styled.p`
  width: 100%;
  line-height: 100px;
  font-weight: 700;
  text-align: center;
  color: ${({ clickdId, id }) => (clickdId === id ? 'red' : 'black')};
`;

export const MenuIconWrap = styled.div`
  display: none;

  @media screen and (max-width: 414px) {
    display: block;
    width: 100px;
    height: 100px;
    cursor: pointer;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
