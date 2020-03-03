import React, { useState, useEffect } from 'react';
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import uuid from 'uuid/v4'
import './App.css';

//If we have used the app before, then there should be a localStorage item
const initialExpenses = localStorage.getItem('expenses') ? 
  JSON.parse(localStorage.getItem('expenses')) :
  []


function App() {
  
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState( {show: false} )
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0)

  useEffect( () => {
    localStorage.setItem('expenses', JSON.stringify(expenses) )
  }, [expenses] )

  const handleCharge = (e) => {
    // console.log(`charge: ${e.target.value}`)
    setCharge(e.target.value)
  }

  const handleAmount = (e) => {
    // console.log(`amount: ${e.target.value}`)
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(charge, amount)
    if(charge !== '' && amount > 0){
      if(edit === true){
        let tempExpenses = expenses.map(item => {
          return item.id === id ?
            {...item, 
              charge: charge, 
              amount: amount
            } :
            item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({type: 'success', text: 'item edited'})

      }
      else{
        const singleExpense = {
          id: uuid(),
          charge: charge,
          amount: amount
        }
        setExpenses([...expenses, singleExpense])
        handleAlert({type: 'success', text: 'item added'})
      }
      setCharge('')
      setAmount('')
    } 
    else {
      console.log('test alert from else of handleSubmit')
      handleAlert({type:'danger', text: `Charge can't be an empty value, and ammount must be greater than 0`})
    }
  }

  const handleAlert = ({type, text}) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({show: false})
    }, 1000)
  }

  const handleClearExpenses = () => {
    setExpenses([])
    handleAlert({type: 'danger', text: 'all items deleted'})

  }
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item => {
      return item.id !== id
    })
    setExpenses(tempExpenses)
    handleAlert({type: 'danger', text: 'item deleted'})
  }
  const handleEdit = (id) => {
    let expense = expenses.find( item => {
      return item.id === id
    })
    let {charge, amount} = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    // That's a crazy smart pattern
    setId(id)
  }

  return (
    <React.Fragment>
        {alert.show === true &&
          <Alert 
            type={alert.type}
            text={alert.text}
          />
        }
        <h1>Budget Calculator</h1>
        <main className="App">  
          <ExpenseForm 
            charge={charge}
            amount={amount}
            handleAmount={handleAmount}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <ExpenseList 
            expenses={expenses} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClearExpenses={handleClearExpenses}
          />
        </main>
        <h1>
          Total spending : 
          <span className="total">
            $ {expenses.reduce( (acc, cur) => {
              return acc += Number(cur.amount)
            }, 0
          )}
          </span>
        </h1>
        
    </React.Fragment>
  );
}

export default App;
