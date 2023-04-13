/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'


import user  from './json/user.json'
import data  from './json/data.json'
import friends from './json/friends.json'
import transaction from './json/transaction.json'



import Profile from './components/profile/profile' 
import Statistics from './components/statistics/statistics'
import FriendList from './components/friends/friend'
import TransactionHistory from './components/transactions/transactons'
function App() {
 

  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics data={data} />
       <FriendList friends={friends} />
      <TransactionHistory transactions={transaction} /> 
    </>
  )
}

export default App
