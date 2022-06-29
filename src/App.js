import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data';
import Detail from './routes/Detail';
import Table from './components/Table';
import styled from 'styled-components';
import { apiRequest } from './api/index';

const App = () => {
  const [shoes, setShoes] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [num, setNum] = useState(2);
  const navigate = useNavigate();
  const apiData = () => {
    {
      num < 4
        ? apiRequest()
            .then((response) => {
              let copy = [...shoes, ...response.data];
              console.log(response.data);
              setShoes(copy);
              setNum(num + 1);
            })
            .catch(() => {
              console.log('fail2!!!!!!!');
            })
        : setIsLoading(true);
    }
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  <Table shoes={shoes} />
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
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member 페이지</div>} />
          <Route path="location" element={<div>location 페이지</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양말 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h4>
        <Outlet></Outlet>
        입니다
      </h4>
    </div>
  );
};

const Event = () => {
  return (
    <div>
      <h4>
        오늘의 이벤트
        <Outlet></Outlet>
      </h4>
    </div>
  );
};

const Btn = styled.button`
  margin-left: 500px;
  width: 15%;
`;

export default App;
