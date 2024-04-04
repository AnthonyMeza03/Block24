import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { puppyList } from './data.js'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId)
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        { 
          puppies.map((puppy) => {
            return (
              <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
                {puppy.name}
              </p>
            );
          })
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default App