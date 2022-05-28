import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';

function App() {
  const [shoes] = useState(data);
  const Table = () => {
    const [shoes] = useState(data);
    return (
      <>
        {shoes.map(function (a, i) {
          return (
            <div className="col-md-4">
              <img
                src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
                width="80%"
              ></img>
              <h4>{shoes[i].title}</h4>
              <p>{shoes[i].content}</p>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
