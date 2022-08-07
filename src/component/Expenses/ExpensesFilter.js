import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  
  const dropdownChangeHandler = (event) => {
    props.onFilter(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* props.selected로 양방향 바인딩해주기(부모컴포넌트의 상태 초기값 필더에서도 보여주기 */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;