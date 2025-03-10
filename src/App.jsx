
import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuHeaders from './Components/MenuHeaders';
import Menu from './Components/Menu';


function App() {


  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={
          <MenuHeaders/>
        }/>
         <Route
          path="/:menuCode"
          element={
          <Menu/>
        }/>
        
      </Routes>
    </Router>
  )
}

export default App
