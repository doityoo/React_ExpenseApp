import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilters from './ExpensesFilter';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  const onFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear)
  }
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilters selected={filterYear} onFilter={onFilterHandler}/>
      {/* selected={filterYear}로 props 내려서 필터 상태 초기값 내려주기*/}
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
    </Card>
    </div>
  )
}

export default Expenses;