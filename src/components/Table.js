import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiRequest } from '../api/index';
import styled from 'styled-components';
import data from '../data';
import axios from 'axios';

const Table = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [shoes, setShoes] = useState(data);
  const apiData = () => {
    axios
      .get('https://codingapple1.github.io/shop/data2.json')
      .then((response) => {
        let copy = [...shoes, ...response.data];
        setShoes(copy);
      })
      .catch(() => {
        console.log('fail2!!!!!!!');
      });
    {
      !isLoading ? setIsLoading(true) : setIsLoading(false);
    }
  };
  return (
    <>
      {shoes.map(function (a, i) {
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
            <h4>{shoes[i].title}</h4>
            <p>{shoes[i].content}</p>
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
          <Btn key="tableBtn" onClick={() => {}}>
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
