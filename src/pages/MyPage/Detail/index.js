import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';
import * as S from './style';

function Detail({ match }) {
  const id = match.params.id;
  const [itemDetail, setItemDetail] = useState({ id: 0, itemName: '' });

  useEffect(() => {
    const handleOngetItemDetail = async () => {
      try {
        const res = await axios.get(`${API_URL}/order/${id}`);
        setItemDetail({ id: res.data.id, itemName: res.data.itemName });
      } catch (error) {
        console.error(error);
      }
    };
    handleOngetItemDetail();
  }, [id]);

  return (
    <S.Container>
      <S.ItemDetailContainer>
        <S.ItemId>{itemDetail.id}</S.ItemId>
        <S.ItemName>{itemDetail.itemName}</S.ItemName>
      </S.ItemDetailContainer>
    </S.Container>
  );
}

export default Detail;
