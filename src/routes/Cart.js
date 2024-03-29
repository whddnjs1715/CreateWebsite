import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increase } from '../service/userSlice';

const Cart = () => {
  const cart = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  // 축약버전도 가능
  // const a = useSelector((state) => {
  //  state.stock;
  // });

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
          {cart.cart.map(function (a, i) {
            return (
              <tr key={i}>
                <td>{cart.cart[i].id}</td>
                <td>{cart.cart[i].name}</td>
                <td>{cart.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increase(cart.cart[i].id));
                    }}
                  >
                    추가
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
