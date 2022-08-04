/* NewExpense 컴포넌트에 들어가는 비용데이터를 모으는 form 로직 컴포넌트 */
import './ExpenseForm.css';
import { useState } from 'react'

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  // const [enteredAmount, setEnteredAmout] = useState('');

  // 3개의 useState()를 하나로 사용하는 방법
  cosnt[userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });


  /* 기본적으로 event객체를 얻는다. envet로 사용자가 입력한 값을 가져올 수 있다. */
  const titleChangeHandler = (event) => {
    // setEnterdTitle(event.target.value)는 어딘가 저장되어 있다.
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
  }

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    })
  }

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
  }


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" ste="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
          {/* min과 max를 지정한 건 나중에 필터링으로 2019 - 2022년까지 날짜를 제공할 것이기에 */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        {/* 위 form을 제출하기 위한 btn */}
      </div>
    </form>
  )
}

export default ExpenseForm;
