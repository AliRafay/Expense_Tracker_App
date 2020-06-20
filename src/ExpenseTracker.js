import React, { useState, useContext } from 'react'
import { TransContext } from './GlobalContext'

const ExpenseTracker = () => {

    const { transactions, addTransaction,delTransaction } = useContext(TransContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState();

    const CalcIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income;
    }

    const CalcExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense -= transactions[i].amount
            }
        }
        return expense;
    }

    let onSubmit = (event) => {
        event.preventDefault();

        if (Number(newAmount) === 0) {
            alert("Zero is not a valid value");
            return false;
        }
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount),
        });
        setDesc('');
        setAmount('');
    }

    return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <br />
            <h5>By Ali Rafay</h5>
            <div className='balance'>
                <h2>Your Balance</h2>
                <h3>${CalcIncome() - CalcExpense()}</h3>
            </div>
            <div className="income-expense">
                <div className='income'>
                    <b> Income</b> <br />
                    <span>${CalcIncome()}</span>
                </div>
                <div className='expense'>
                    <b> Expense </b><br />
                    <span>${CalcExpense()}</span>
                </div>
            </div>
            <div className="history">
                <h2>Record History</h2> <hr />
                <ul className="list">
                    {transactions.map((transObj, ind) => {
                        // ADDING ID TO EACH RECORD
                        transObj.id=ind;
                        return (
                            <li key={ind} className={`list-item`}>
                                <button onClick={()=>delTransaction(transObj.id)} className='delete-btn'><i className="fas fa-trash-alt"></i></button>
                                <div className={`list-item-div
                            ${transObj.amount>0 ? 'income-transaction' : 'expense-transaction'}`}>
                                {transObj.desc}
                                <span>
                                    ${Math.abs(transObj.amount)}
                                </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="add-transaction">
                <center>
                    <h2>Add New Record</h2>
                </center> <hr />
                <form onSubmit={onSubmit}>
                    <label>
                        Description
                        <input type="text" placeholder='Enter Description' required
                            value={newDesc}
                            onChange={(ev) => setDesc(ev.target.value)} />
                    </label>
                    <br />
                    <label>
                        Amount
                        <input type="number" placeholder='Enter Amount' required
                            value={newAmount}
                            onChange={(ev) => setAmount(ev.target.value)} />
                    </label>
                    <br/><span>(Enter +ve for Income and -ve for expense)</span>
                    <br />
                    <button className='record'>Add Record</button>
                </form>
            </div>

        </div>
    )
}

export default ExpenseTracker