import React, { useEffect, useState } from "react"
import { getPosts, getuser } from "./api/index"
import Cards from "./components/Cards"
import UserCards from "./components/UserCards"

function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    getuser().then((user) => setUser(user.results[0]))
  }, [])
  const change = () => {
    getuser().then((user) => setUser(user.results[0]))
  }

  useEffect(() => {
    getPosts().then((posts) => setState(posts))
  }, [])
  return (
    <div className="App">
      {user && <UserCards data={user} />}
      <button onClick={change}>change</button>
      {state ? (
        state.map((e) => (
          <Cards
            title={e.title}
            body={e.body}
          />
        ))
      ) : (
        <p>no data</p>
      )}
    </div>
  )
}

export default App
