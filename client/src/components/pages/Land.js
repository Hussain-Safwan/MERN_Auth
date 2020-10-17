import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../action/index'

const Land = () => {
  const auth = useSelector(state => state.auth)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const User = JSON.parse(localStorage.getItem('user'))
    setUser(User)
  }, [auth])

  const dispatch = useDispatch()
  const history = useHistory()

  const logoutHandler = e => {
    dispatch(logout())
  }

  return (
    <div style={{padding: '100px'}}>
      {
        user ? <div>
          <h2>Hello, {user.teamName}</h2>
          {
            JSON.stringify(user)
          }
          </div> : <h2>You're not logged in</h2>
      }
      <br/>
      <Link to='/register'>Register</Link> <br />
      {
        user ? <div style={{cursor: 'pointer'}} onClick={logoutHandler}>Log out</div> : <Link to='/login'>Login</Link>
      }
    </div>
  )
}

export default Land