import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  const stock = useSelector((state) => {
    return state;
  });
  // 축약버전도 가능
  // const a = useSelector((state) => {
  //  state.stock;
  // });
  console.log(stock.stock[0].name);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {stock.stock.map(function (a, i) {
            return (
              <tr>
                <td>{stock.stock[i].id}</td>
                <td>{stock.stock[i].name}</td>
                <td>{stock.stock[i].count}</td>
                <td>변경</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
