import './App.css';
import { useState } from 'react';

const App = () => {
  const posts = '개발 블로그';
  const [name, setName] = useState('언어 추천');
  const [num, setNum] = useState([1, 2, 3]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{posts}</h3>
        <h4>{num[0]}</h4>
        <h4>{setNum[(num[0] = 4)]}</h4>
        <p>2022년 4월 22일 발행</p>
        <h4>{num}</h4>
        <hr />
      </div>
    </div>
  );
};

export default App;
