// import ExpenseDetails from './ExpenseDetails';

import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title,setTitle]=useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  // let title = props.title; 

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  const changeHandler = () => {
    setAmount('100');
    console.log(amount);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem; 