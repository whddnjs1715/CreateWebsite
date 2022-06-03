import { useParams } from 'react-router-dom';

function Detail(props) {
  const params = useParams();
  console.log();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={'https://codingapple1.github.io/shop/shoes' + (parseInt(params.id) + 1) + '.jpg'}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[params.id].title}</h4>
          <p>{props.shoes[params.id].content}</p>
          <p>{props.shoes[params.id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
