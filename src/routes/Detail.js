import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'red' : 'black')};
  padding: 10px;
`;

const NewBtn = styled.button(Btn)``;

function Detail(props) {
  const { id } = useParams();

  return (
    <div className="container">
      <Btn bg="blue">버튼</Btn>
      <Btn bg="orange">버튼</Btn>
      {id < 3 ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Detail;
