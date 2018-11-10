import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Messages } from './Messages'

export const MessagesContainer = () => (
  <Query
    query={gql`
      query {
        messages {
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
    {({ data, subscribeToMore }) => (
      <Messages data={data} subscribeToMore={subscribeToMore} />
    )}
  </Query>
)
