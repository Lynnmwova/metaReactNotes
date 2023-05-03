import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Footer from './components/Footer'
import Promo from './components/Promo'
import InputComponent from './components/InputComponent'
import RegisterForm from './components/RegisterForm'
import MealsList from './components/MealsList'
import MealProvider from './components/MealProvider'
import Counter from './components/Counter'
import Contacts from './components/contacts'

function App() {

  return (
    <>
    <nav>
      <Link to='/' className='nav-item' > Intro1 </Link>
      <Link to='/promo' className='nav-item'> Promo </Link>
      <Link to='/contacts' className='nav-item'> Contacts</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Intro1/>}></Route>
      <Route path='/promo' element={<Promo/>}></Route>
      <Route path='/contacts' element = {<Contacts/>}></Route>
    </Routes>
</>
  )
}

export default App
