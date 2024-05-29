import './App.css'
import Button from './components/button'
import  Card  from './components/card'
import {Card1} from './components/card1'
import {Cards} from './components/cads'
function App() {
  return ( 
  <>
    <Button paragrafo='olá vite' />
    <Button />
    <Card title='card 1'/>
    <Card />
    <Card1>
      <h3>card 2</h3>  
      <p>isso é um elemento react</p>
    </ Card1>
    <Cards/>
  </>
    
  )
}

export default App
