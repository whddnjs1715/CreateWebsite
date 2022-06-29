import { useNavigate } from 'react-router-dom';

const Table = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.shoes.map(function (a, i) {
        return (
          <div
            key={i}
            className="col-md-4"
            onClick={() => {
              navigate('/detail/' + i);
            }}
          >
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
              width="80%"
            ></img>
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].content}</p>
          </div>
        );
      })}
    </>
  );
};

export default Table;
