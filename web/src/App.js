import React, { useState } from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from './Apollo'
import { Login } from './Login'
import { MessagesContainer } from './MessagesContainer'
import { NewMessageForm } from './NewMessageForm'

import './App.css'

const App = () => {
  const [userId, setUserId] = useState(null)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MessagesContainer />
        {!userId ? (
          <Login setUserId={setUserId} />
        ) : (
          <NewMessageForm senderId={userId} />
        )}
      </div>
    </ApolloProvider>
  )
}

export default App
