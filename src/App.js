import './App.css';
import { useState } from 'react';

const App = () => {
  const posts = '개발 블로그';
  const [name, setName] = useState(['파이썬', '자바', '자바스크립트']);
  const [num, setNum] = useState([1, 2, 3]);
  const [good, setGood] = useState(0);
  const beGood = () => {
    setGood(good + 1);
  };
  const nameChange = () => {
    let copy = [...name];
    name[0] === '파이썬' ? (copy[0] = 'Swift') : (copy[0] = '파이썬');
    setName(copy);
  };
  const sortArray = () => {
    let arr = [...name];
    arr.sort();
    setName(arr);
  };
  const [modal, setModal] = useState(false);

  const Modal = () => {
    return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>
      <button onClick={sortArray}>가나다순정렬</button>
      <button onClick={nameChange}>제목 변경</button>
      {name.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {name[i]}
              {a == 2 ? (
                <button
                  onClick={() => {
                    modal === true ? setModal(false) : setModal(true);
                  }}
                >
                  좋아요
                </button>
              ) : (
                <button onClick={beGood}>좋아요</button>
              )}
              <span>{good}</span>
            </h4>
            <p>5월 1일 발행</p>
          </div>
        );
      })}
      <hr />
      {modal === true ? <Modal /> : null}
    </div>
  );
};

export default App;
