import {useState,useEffect} from 'react'
import {Logo} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage.js'

const initialState={
  name:'',
  email:'',
  password:'',
  isMember:true
}

const Register = () => {
  const [value,setValue]=useState(initialState)
const handleChange=(e)=>{
  setValue()
}
 
const handleSubmit=(e) => {
  // e.preventDefault()
  console.log(e.target.value)
}
  return (
    <Wrapper className="full-page">
      <form className='form' onSubmit={handleSubmit}>
      <Logo/>
      <h3>login </h3>
      <div className="from-row">
        <label htmlFor="name" className='form-label'>Name</label>
        <input className="form-input" type="text" value={value.name} name="name" onChange={handleChange}/>
      </div>
      <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  )
}
export default Register