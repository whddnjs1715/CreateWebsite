import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Context1 } from '../App';
import { addItem, sameItem } from '../service/userSlice';
import { useDispatch } from 'react-redux';
import '../App.css';

const Detail = (props) => {
  let { 재고 } = useContext(Context1);
  const { id } = useParams();
  const [appear, setAppear] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
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
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addItem({ id: props.shoes[id].id, name: props.shoes[id].title, count: 1 }),
                );
              }}
            >
              주문하기
            </button>
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
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = ({ tab }) => {
  let { 재고 } = useContext(Context1);
  const arr = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>];
  const [fade, setFade] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(timeout);
      setFade('');
    };
  }, [tab]);
  return <div className={'start ' + fade}>{arr[tab]}</div>;
};

export default Detail;
