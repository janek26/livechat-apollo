import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export const Login = ({ setUserId }) => {
  const [senderName, setSenderName] = useState('')
  return (
    <Mutation
      mutation={gql`
        mutation createUser($senderName: String!) {
          createUser(data: { name: $senderName }) {
            id
          }
        }
      `}
    >
      {send => (
        <div className="NewMessage">
          <form
            onSubmit={async e => {
              e.preventDefault()
              const { data } = await send({
                variables: {
                  senderName,
                },
              })
              setUserId(data.createUser.id)
            }}
          >
            <input
              name="body"
              value={senderName}
              onChange={e => setSenderName(e.target.value)}
            />
            <button type="submit">Login!</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}
