import { useHistory } from 'react-router-dom';
import * as S from './style';

function OrderItem({ children }) {
  const history = useHistory();
  return (
    <S.Container>
      {children.map((item) => {
        return (
          <S.OrderItemWrap
            key={item.id}
            onClick={() => history.push(`/mypage/order/${item.id}`)}
          >
            <S.ItemId>{item.id}</S.ItemId>
            <p>{item.itemName}</p>
          </S.OrderItemWrap>
        );
      })}
    </S.Container>
  );
}

export default OrderItem;
