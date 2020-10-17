import React, { useState, useEffect } from 'react'
import EachMember from '../layouts/EachMember'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useHistory } from 'react-router-dom'

import '../../css/register.css'
import logo from '../../images/icpc_logo.png'
import validate from '../../utils/RegValidation'
import Alert from '../layouts/Alert'
import { register } from '../../action/index'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
const auth = useSelector(state => state.auth)

// useEffect(() => {
//   if (auth.user) {
//     history.push('/')
//   }
// }, [auth])

const addMember = e => {
  if (membersInfo.length < 3) {
    setMembersInfo([...membersInfo,  {
      memberName: '',
      memberYear: '',
      memberSemester: ''
    }])
  }
}
const [teamInfo, setTeamInfo] = useState({
  teamName: '',
  coachName: '',
  university: '',
  email: '',
  password: '',
  conPassword: ''
})
const [membersInfo, setMembersInfo] = useState([
  {
    memberName: '',
    memberYear: '',
    memberSemester: ''
  }
])
const [alert, setAlert] = useState(null)
const history = useHistory()
const dispatch = useDispatch()
const submit = (e) => {
  const data = {
    teamInfo,
    membersInfo
  }
  const check = validate(data)
  setAlert(check)
  if (!check.error) {
    const team = {
      teamName: teamInfo.teamName,
      coachName: teamInfo.coachName,
      university: teamInfo.university,
      email: teamInfo.email,
      password: teamInfo.password,
      conPassword: teamInfo.conPassword,
      membersInfo
  }
  dispatch(register(team))
  history.push('/login')
  }
}
const textStyles = {
  width: '100%',
  marginTop: '15px'
} 
 const linkStyles = {
  textDecoration: 'none',
  color: '#5499C7'
}
const handleInputs = (e, i) => {
  const info = [...membersInfo]
  info[i][e.target.name] = e.target.value
  setMembersInfo(info)
}
const handleTeamInfo = (e) => {
  const team = teamInfo
  team[e.target.name] = e.target.value
  setTeamInfo(team)
}

  return (
    <div className='Register'>
      <div className='register-box'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='header'><p>Team Registration</p></div>
      {
        alert ? <Alert reason={alert.error} msg={alert.msg} /> : <div></div>
      }
      <TextField style={textStyles} name='teamName'  variant='outlined' label='Team Name'
      onChange={e => handleTeamInfo(e)} 
      /> <br/>
      <TextField style={textStyles} name='coachName'  variant='outlined' label='Coach Name'
      onChange={e => handleTeamInfo(e)}/> <br />
      <TextField style={textStyles} name='university' variant='outlined' label='University'
      onChange={e => handleTeamInfo(e)} / >
      <TextField style={textStyles} name='email' variant='outlined' label='Team Email'
      onChange={e => handleTeamInfo(e)} / >
      <TextField style={textStyles} type='password' name='password' variant='outlined' label='Password'
      onChange={e => handleTeamInfo(e)} / >
      <TextField style={textStyles} type='password' name='conPassword' variant='outlined' label='Confirm password'
      onChange={e => handleTeamInfo(e)} / >
      <div className='team-holder'>
      {
        membersInfo.map((member, i) => (
        <div>
          <h3>Participent {i+1}</h3> 
          <TextField style={textStyles} name='memberName' onChange={e => handleInputs(e, i)} variant='outlined' label='Name of the participent'
          value={member.memberName} /> <br />
          <div className='side'>
              <TextField type='number' name='memberYear' style={{width: '48%'}}  
              onChange={e => handleInputs(e, i)}
              variant='outlined' label='Year'
              value={member.memberYear} /> 
              <TextField type='number' style={{width: '48%'}} name='memberSemester' 
              onChange={e => handleInputs(e, i)}
              variant='outlined' label='Semester'
              value={member.memberSemester} />
          </div>
           <br />
          </div>
        )
        )
      }
      <Button style={{marginTop: '10px'}} variant='contained' onClick={addMember}>Add Member</Button>
      </div>
      <Button style={{marginTop: '30px', width: '100%'}} variant='contained' onClick={submit} color='secondary'>Submit</Button>
      <p>Have an account? <Link style={linkStyles} to='/login'>Sign in</Link></p>
      </div>
     </div> 
  )
} 

export default Register
