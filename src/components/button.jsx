import './button.css'

const sayHello = () => {
  console.log('ola');
}

const Button = ({paragrafo = 'clique aqui'}) =>{
  return(
    <button className='btn'onClick={sayHello} >{paragrafo}</button>
  )  
}

export default Button