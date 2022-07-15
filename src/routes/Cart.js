import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {
  const a = useSelector((state) => {
    return state;
  });
  // 축약버전도 가능
  // const a = useSelector((state) => {
  //  state.stock;
  // });
  console.log(a.user);
  console.log(a.stock);

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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
