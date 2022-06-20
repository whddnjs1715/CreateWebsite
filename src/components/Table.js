import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiRequest } from '../api/index';
import styled from 'styled-components';

const Table = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //const [getData, setGetData] = useState();
  const apiData = () => {
    apiRequest();
    {
      !isLoading ? setIsLoading(true) : setIsLoading(false);
    }
  };
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
      {!isLoading ? (
        <Btn
          key="tableBtn"
          onClick={() => {
            apiData();
          }}
        >
          더보기
        </Btn>
      ) : (
        <>
          <Btn
            key="tableBtn"
            onClick={() => {
              apiData();
            }}
          >
            취소
          </Btn>
        </>
      )}
    </>
  );
};

const Btn = styled.button`
  margin-left: 500px;
  width: 15%;
`;

export default Table;
