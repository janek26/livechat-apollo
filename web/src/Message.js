import React from 'react'

export const Message = ({ msg }) => (
  <div key={msg.id} className="msg">
    <span>{msg.sender.name}</span>
    <p>{msg.body}</p>
  </div>
)
