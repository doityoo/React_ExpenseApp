/*사용자들이 자신들의 비용 데이터를 입력할수 있는 입력창을 렌더링하는 컴포넌트*/

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {

  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>

  )
}

export default NewExpense;