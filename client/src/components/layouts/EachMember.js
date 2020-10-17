import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'


const EachMember = props => {
  const textStyles = {
    width: '50%',
    marginTop: '15px'
  }
  const eachM = (
    <div>
    <div className='each-member'>
      <TextField style={textStyles} className='memberName' variant='outlined' label='Name of the participent' />
      <input type='text' className='memberYear' placeholder='Year' />
      <input type='text' className='memberSemester' placeholder='Semester' />
      <br />
      Tshirt Size: <select className='memberSize'>
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
      </select>
    </div>
  </div>
  )
  let members = []
  const { memLen } = props
  for (let i=0; i<memLen; i++) {
    members.push(eachM)
  }
  if (props.call) {
    const names = document.getElementsByClassName('memberName')
    const years = document.getElementsByClassName('memberYear')
    const semesters = document.getElementsByClassName('memberSemester')
    const sizes = document.getElementsByClassName('memberSize')
    let membersInfo = []
    for (let i=0; i<names.length; i++) {
      const info = {
        name: names[i].value,
        year: years[i].value,
        semester: semesters[i].value,
        tshirt: sizes[i].value
      }
      membersInfo.push(info)
    }
    // console.log(membersInfo)
    const submit = props.submit
    submit(membersInfo)
  }
  return (
    <div>
    {
      members.map((member, i) => ( 
        <div>
          <h3> Member {i+1}</h3>
          {member}
        </div>
        ))
    }
    </div>
  )
}

export default EachMember