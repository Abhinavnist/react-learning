import React from "react"
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="flex">
      <div className="cards">
        <h3 className="title">{props.title}</h3>
        <p className="body">{props.body}</p>
      </div>
    </div>
  )
}

export default Cards
