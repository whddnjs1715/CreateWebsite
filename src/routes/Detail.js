import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
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
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="container">
      {appear == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : <></>}

      {id < 7 ? (
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
          <input
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
          ></input>
        </div>
      ) : (
        <div></div>
      )}

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>
    </div>
  );
};

export default Detail;
