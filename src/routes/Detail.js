import { useParams } from 'react-router-dom';

function Detail(props) {
  const { id } = useParams();
  console.log();
  return (
    <div className="container">
      {id < 3 ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (parseInt(props.id) + 1) + '.jpg'}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[props.id].title}</h4>
            <p>{props.shoes[props.id].content}</p>
            <p>{props.shoes[props.id].price}</p>
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
