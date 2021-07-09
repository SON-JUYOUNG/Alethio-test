import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
`;

export const OrderItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px 0;
  padding: 0 5px;
  background-color: tomato;
  cursor: pointer;
`;

export const ItemId = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
