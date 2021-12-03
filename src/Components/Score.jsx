import { useState, useEffect } from "react"

const Score = ({ win, firstGame, toggle }) => {

  const [score, setScore] = useState(1)

  const incrementScore = () => {
    setScore(score + 1)
  }

  useEffect(() => {
    if (!firstGame) {
      if (win === true) return incrementScore()
      if (win === false) return setScore("You lost!: " + score)
    }
  }, [win, toggle])

  return (
    <p>The Score is: {score}</p>
  )
}

export default Score
