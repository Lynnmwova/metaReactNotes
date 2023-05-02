import { Routes, Route } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Intro1/>
    <Footer/>
</>
  )
}

export default App
