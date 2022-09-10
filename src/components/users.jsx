import React, { useState } from "react"
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(users => users._id !== userId))
    }

    const renderPhrase = (number) => {
        if (number >= 2 && number <= 4) {
            return (
                number + ' человека тусанет с тобой сегодня'
                )
        } if (number == 0) {
            return 'Никто с тобой не тусанет сегодня'
        } else {
            return number + ' человек тусанет с тобой сегодня'
        }
    }
    let classes = 'badge m-2 '
    classes += users.length == 0 ? 'bg-danger' : 'bg-primary'

    return (
        <>
    <h2><span className={classes}>{renderPhrase(users.length)}</span></h2>
   <table className="table">
   <thead>
    <tr className="table">
      <th >Имя</th>
      <th >Качества</th>
      <th >Профессия</th>
      <th >Встретился, раз</th>
      <th >Оценка</th>
      <th > </th>        
    </tr>
  </thead>
  <tbody>
        {users.map((user) => {
            return(
            <tr key={user._id} className='table'>
                <td>{user.name}</td>
                <td>{user.qualities.map((quality)=> <span key={quality.name} className={'badge m-1 bg-'+ quality.color}>{quality.name}</span>)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <button className="btn btn-danger m-1" onClick={()=>handleDelete(user._id)}>Delete</button>
            </tr>
        )})}
  
  </tbody>
</table>

        </>
    )
}
export default Users