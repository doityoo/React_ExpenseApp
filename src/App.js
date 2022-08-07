
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";


function App() {
	// expenses 더미데이터
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12)
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	// NewExpense에서 전달하는 state 값을 받아오는 함수
	// expense는 NewExpense 자식 컴포넌트에서 받아오는 state의 객체
	const addExpenseHandler = expense => {
		console.log("in app.js")
		console.log(expense)
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses item={expenses} />
		</div>
	);
}

export default App;