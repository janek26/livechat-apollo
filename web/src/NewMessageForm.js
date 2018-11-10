import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export const NewMessageForm = ({ senderId }) => {
  const [newMessageBody, setNewMessageBody] = useState('')
  return (
    <Mutation
      mutation={gql`
        mutation createMessage($body: String!, $senderId: ID!) {
          createMessage(
            data: { body: $body, sender: { connect: { id: $senderId } } }
          ) {
            id
            body
            sender {
              id
              name
            }
          }
        }
      `}
    >
      {send => (
        <div className="NewMessage">
          <form
            onSubmit={async e => {
              e.preventDefault()
              await send({
                variables: {
                  senderId,
                  body: newMessageBody,
                },
              })
              setNewMessageBody('')
            }}
          >
            <textarea
              name="body"
              value={newMessageBody}
              onChange={e => setNewMessageBody(e.target.value)}
            />
            <button type="submit">Send!</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}
