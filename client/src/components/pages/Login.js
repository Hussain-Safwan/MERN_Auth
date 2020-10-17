import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import logo from '../../images/icpclogo_big.png'
import { Link } from 'react-router-dom'
import { login } from '../../action/index'
import { useHistory } from 'react-router-dom'
import Alert from '../layouts/Alert'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [isError, setIsError] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (auth.user) {
      if (auth.error) {
        setIsError(auth)
      } else {
        history.push('/')
      }
    }
  }, [auth])

  const handleInput = e => {
    const cred = credentials
    cred[e.target.name] = e.target.value
    setCredentials(cred)
  }
  const submit = e => {
    dispatch(login(credentials))
  }
  const textStyles = {
    width: '100%',
    marginTop: '15px'
  }
  const linkStyles = {
    textDecoration: 'none',
    color: '#5499C7'
  }
  return (
    <div className='Register' style={{marginTop: '80px'}}>
      <div className='login-box'>
        <div className='login-logo'>
          <img src={logo} />
        </div>
        <div className='header'><p>Team Account Login</p></div>
        {
          isError ? <Alert reason={true} msg={auth.msg} /> : <div></div> 
        }
        <TextField style={textStyles} name='email'  variant='outlined' label='Team Email'
        onChange={e => handleInput(e)} 
        /> <br/>
        <TextField style={textStyles} type='password' name='password'  variant='outlined' label='Password'
        onChange={e => handleInput(e)}/>
        <p className='right'><Link style={linkStyles}>Forgot password?</Link></p>
        <Button style={{marginTop: '30px', width: '100%'}} variant='contained' onClick={submit} color='secondary'>LOGIN</Button>
        <p>Don't have an account? <Link style={linkStyles} to='/'>Create one!</Link></p>
      </div>
    </div>
  )
}

export default Login