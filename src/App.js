import './App.css';

const App = () => {
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{posts}</h3>
        <p>2022년 4월 20일 발행</p>
        <hr />
      </div>
    </div>
  );
};

export default App;
