/* NewExpense 컴포넌트에 들어가는 비용데이터를 모으는 form 로직 컴포넌트 */
import './ExpenseForm.css';
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // 3개의 useState()를 하나로 사용하는 방법
  // cosnt[userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });


  /* 기본적으로 event객체를 얻는다. envet로 사용자가 입력한 값을 가져올 수 있다. */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    /* 동시에 많은 상태 업데이트를 계획한다면 오래되었거나 잘못된 상태에 의존할 수 있다. */
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   })
    // }
    /* 이전(최신) state 값을 관리하기 위해서 이렇게 사용할 수 있다. prevSate는 이전 상태값을 의미하는가? */
    // setUserInput((prevSate) => {
    //   return { ...prevSate, enteredTitle: event.target.value }
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    props.onSaveExpenseData(expenseData)
    // props로 전달된 함수 onSaveExpenseData의 인자로 expenseData 객체가 전달됨.
  };


  return (
    // form이 제출 될때 마다 일부 함수를 실행한다.(submitHandler)
    // form이 제출될 때마다 웹페이지가 리로드 된다.(서버에 요청을 보내는 것)
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler} />
          {/* min과 max를 지정한 건 나중에 필터링으로 2019 - 2022년까지 날짜를 제공할 것이기에 */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        {/* 위 form을 제출하기 위한 btn */}
        {/* 버튼의 입력타입이 submit이라면 이전체 폼요소는 수신할 이벤트를 생략할 수 있다. 이것이 submit 이벤트 */}
      </div>
    </form>
  )
}

export default ExpenseForm;
