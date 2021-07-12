import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';
import OrderItem from './components/OrderItem';
import { API_URL } from 'config';

function MyPage() {
  const [orderList, setOrderList] = useState([]);
  const [pageContent, setPageContent] = useState({
    totalPages: 0,
    currentPage: 0,
  });

  // total 개수만큼 페이지 번호 박스 생성하기 위한 배열 생성
  const totalPage = [];
  for (let i = 0; i < pageContent.totalPages; i++) {
    totalPage.push(i + 1);
  }

  const handleOnPageNum = (idx) => {
    setPageContent({ ...pageContent, currentPage: idx });
  };

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/order?page=${pageContent.currentPage}`,
        );
        setOrderList(res.data.content);
        setPageContent({
          totalPages: res.data.totalPages,
          currentPage: res.data.currentPage,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getOrderList();
  }, [pageContent.currentPage]);

  return (
    <S.Container>
      <OrderItem>{orderList}</OrderItem>
      <S.PageNumContainer>
        <S.PageNumWrap>
          {totalPage.map((item, idx) => {
            return (
              <S.PageNumBox key={idx} onClick={() => handleOnPageNum(idx)}>
                <p>{item}</p>
              </S.PageNumBox>
            );
          })}
        </S.PageNumWrap>
      </S.PageNumContainer>
    </S.Container>
  );
}

export default MyPage;
