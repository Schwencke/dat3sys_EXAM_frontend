import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

const Score = ({ win, firstGame, toggle, score, setScore }) => {
  let history = useHistory();

  const lose = () => {
    history.push("/lose")
  }

  const incrementScore = () => {
    setScore(score + 1)
  }

  useEffect(() => {
    if (!firstGame) {
      if (win === true) return incrementScore()
      if (win === false) {
        lose()
        //return setScore("You lost:" + score)
      }
    }
  }, [win, toggle])


  return (
    <p>The Score is: {score}</p>
  )
}

export default Score
