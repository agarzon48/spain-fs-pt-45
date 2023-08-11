import { useState } from 'react'
import Buttons from './components/Buttons'
import Login from './components/Login'

function App() {
  
  const [page, setPage] = useState('loginPage');

  function handleClick() {

    setPage('dashboard')
  } 

  if (page === 'loginPage'){
    return <Login handleClick = {handleClick}/> 
  } 



  return (
    <div className="btn-group-vertical gap-3" role="group" aria-label="Vertical button group">
      <Buttons color="success" text="Actual Money"/>
      <Buttons color="success" text="Programmed Earnings"/>
      <Buttons color="danger" text="Actual Expenses"/>
      <Buttons color="danger" text="Programmed Expenses"/>
    </div>
    )
}

export default App
