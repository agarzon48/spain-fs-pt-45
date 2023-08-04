import { useState } from 'react'
import ListOfButtons from './Components/ListOfButtons'
import Buttons from './Components/Buttons'

function App() {
  

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
