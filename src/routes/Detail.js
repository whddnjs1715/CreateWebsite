import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = (props) => {
  const { id } = useParams();
  const [appear, setAppear] = useState(true);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppear(false);
      var pattern = /[^(가-힣)]/;
      if (pattern.test(document.querySelector('div > input').value)) {
        alert('한글만 입력해 주세요');
      }
      document.querySelector('div > input').value = '';
      document.querySelector('div > input').focus();
    }, 1000);
    return () => {
      // useEffect 동작 전에 실행되는 코드 return () => {}
      // clean up function은 mount될 시에는 실행안되고 unmount될 시에는 실행된다.
      // clearTimeout 타이머 제거해주는 함수
      clearTimeout(timer);
    };
  }, [inputValue]);
  // [](Dependency) : useEffect 실행조건을 넣을 수 있는 곳 []안에 state가 있으면 안에있는 state가 변할때만 실행된다. mount시 count라는 state가 변할 때 실행된다.
  // 컴포넌트가 mount될 시 1회만 실행하고 싶으면 []로 나두면 된다.
  // useEffect 쓰는 이유 : useEffect 안에 있는 코드는 html 렌더링 후에 동작합니다.
  // useEffect 안에 적는 코드들은 1.어려운 연산작업 2.서버에서 데이터 가져오는 작업 3.타이머 장착하는것
  return (
    <div className="container">
      {appear == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : <></>}

      {id < 3 ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'}
              width="100%"
            />
          </div>
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
          ></input>
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
