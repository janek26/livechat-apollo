import React, { useEffect } from 'react'
import gql from 'graphql-tag'
import { Message } from './Message'

export const Messages = ({ data, subscribeToMore }) => {
  useEffect(
    () =>
      subscribeToMore({
        document: gql`
          subscription {
            message {
              node {
                id
                body
                sender {
                  id
                  name
                }
              }
            }
          }
        `,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev
          const newFeedItem = subscriptionData.data.message.node
          return { ...prev, messages: [...prev.messages, newFeedItem] }
        },
      }),
    [],
  )
  return (
    <div className="Messages">
      {data.messages &&
        data.messages.map(msg => <Message key={msg.id} msg={msg} />)}
    </div>
  )
}
