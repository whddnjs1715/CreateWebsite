import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data';
import Detail from './routes/Detail';
import Table from './components/Table';

const App = () => {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
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

export default App;
