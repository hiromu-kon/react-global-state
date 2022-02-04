/* react */
import { useEffect, useState } from 'react';
/* axios */
import axios from 'axios';
/* type */
import { User } from '../types/User'

/**
 * Userリスト
 *
 * @returns
 */
export const Users = () => {
  const [users, setUsers] = useState<User []>([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/Users')
      .then(res => {
        setUsers(res.data)
      }).catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <h1>Userリスト</h1>
      {users.map(user => 
        <p key={user.id}>{JSON.stringify(user, null, 4)}</p>
      )}
    </div>
  )
}
