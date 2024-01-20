import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <main className='bg-slate-300/20'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
