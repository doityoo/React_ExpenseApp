/*사용자들이 자신들의 비용 데이터를 입력할수 있는 입력창을 렌더링하는 컴포넌트*/

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // props로 app.js에서 addExpense 함수를 가져오고 함수 인자에 데이터를 전달
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    // enteredExpenseData는 ExpenseForm에서 event의 객체를 가져옴.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>

  )
}

export default NewExpense;