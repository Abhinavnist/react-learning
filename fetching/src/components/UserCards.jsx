import React from "react"

const UserCards = (props) => {
  return (
    <div className="usercard">
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city}</p>
      <p>{props.data.email}</p>
    </div>
  )
}

export default UserCards
