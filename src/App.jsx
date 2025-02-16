
import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHeaders from './Components/MenuHeaders';

function App() {
  

  return (
    <Router>
      <Header/>
      <MenuHeaders/>
    </Router>
  )
}

export default App
