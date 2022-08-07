/*사용자들이 자신들의 비용 데이터를 입력할수 있는 입력창을 렌더링하는 컴포넌트*/

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// props로 app.js에서 addExpense 함수를 가져오고 함수 인자에 데이터를 전달
const NewExpense = (props) => {
  // enteredExpenseData는 ExpenseForm에서 event의 객체(expenseData)를 가져옴.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    // 부모컨포넌트인 app.js에 props.onAddExpense에 인자로 객체 데이터 값을 전달
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>

  )
}

export default NewExpense;