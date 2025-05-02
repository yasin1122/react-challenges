import React from "react"

export default function App() {
  
  const [gameRunning, setGameRunning] = React.useState(false)

    return (
        <div>       
          <button className="video-game-button" onClick={() => setGameRunning(prev => !prev)}>{gameRunning ? "Pause" : "Play"}</button>
        </div>
  )
}