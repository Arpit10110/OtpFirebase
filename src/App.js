import React from 'react'
import {HashRouter as Router, Routes,Route} from "react-router-dom"
import PhoneLog from "./Components/PhoneLog.jsx"
import Thanks from "./Components/Thanks"
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<PhoneLog/>} />
      <Route path='/Thanks' element={<Thanks/>} />
    </Routes>
   </Router>
  )
}

export default App
