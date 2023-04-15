import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Nav/>
    <Intro1/>
    <Intro2/>
    <Intro3/>
    <Footer/>
/</div>
  )
}

export default App
