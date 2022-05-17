import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const posts = '개발 블로그';
  const [name, setName] = useState(['파이썬', '자바', '자바스크립트']);
  const [good, setGood] = useState([0, 0, 0]);
  const [num, setNum] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const nameChange = () => {
    let copy = [...name];
    name[0] === 'Swift' ? (copy[0] = '파이썬') : (copy[0] = 'Swift');
    setName(copy);
  };
  const sortArray = () => {
    let arr = [...name];
    arr.sort();
    setName(arr);
  };
  const addName = () => {
    let copy = [...name];
    copy.unshift(inputValue);
    setName(copy);
  };
  const delName = () => {
    // 내가 한 방식
    //  let copy = [];
    //  for (var i = 0; i < name.length - 1; i++) {
    //    copy[i] = name[i];
    //  }
    //  setName(copy);
    let copy = [...name];
    copy.splice(copy.length - 1, 1);
    setName(copy);
  };
  const [modal, setModal] = useState(false);

  const Modal = (props) => {
    return (
      <div
        className="modal"
        style={props.num == 1 ? { background: 'yellow' } : { background: 'gray' }}
      >
        <h4>{props.name[props.num]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            //props.num == 1 ? setNum(2) : setNum(1);
            document.querySelector('div[class="modal"]').style.background == 'gray'
              ? (document.querySelector('div[class="modal"]').style.background = 'blue')
              : (document.querySelector('div[class="modal"]').style.background = 'gray');
          }}
        >
          색상 변경
        </button>
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
          <div className="list" key={i}>
            <div>
              <div
                onClick={() => {
                  modal === true ? setModal(false) : setModal(true);
                  setNum(i);
                }}
              >
                {name[i]}
              </div>
              <button
                onClick={() => {
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy);
                }}
              >
                좋아요
              </button>
              <span>{good[i]}</span>
              <p>5월 1일 발행</p>
            </div>
          </div>
        );
      })}
      <hr />
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
        onMouseOver={() => {
          console.log('onMouseOver');
        }}
      />
      <button onClick={addName}>발행</button>
      <button onClick={delName}>삭제</button>
      {modal === true ? <Modal name={name} num={num} setNum={setNum} /> : null}
    </div>
  );
};

export default App;
