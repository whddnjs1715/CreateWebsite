import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = (props) => {
  const { id } = useParams();
  const [appear, setAppear] = useState(true);
  useEffect(() => {
    setTimeout(() => {}, 1000);
  });
  // useEffect 쓰는 이유 : useEffect 안에 있는 코드는 html 렌더링 후에 동작합니다.
  // useEffect 안에 적는 코드들은 1.어려운 연산작업 2.서버에서 데이터 가져오는 작업 3.타이머 장착하는것
  return (
    <div className="container">
      <div className="alert alert-warning">2초이내 구매시 할인</div>
      {id < 3 ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Detail;
