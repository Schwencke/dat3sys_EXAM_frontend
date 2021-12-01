import { useState, useEffect } from "react";

const Score = ({firstcard, currentCard, nextCard, currentSelected, cardLogic }) => {

 const [win, setWin] = useState(true)
 const [toggleFirstGame, setToggleFirstGame] = useState(true)
 const [score, setScore] = useState(0)
 useEffect(() => {
   if (toggleFirstGame === true){return setToggleFirstGame(false)}
     let logic = cardLogic.winOrLoose(nextCard, currentCard, currentSelected)
     console.log(logic + "logic")
    if (logic){
        setWin(true)
        setScore(score + 1)
      }else setWin(false)
 }, [currentSelected])

  return (
    <div>
      <p>Previous card: {currentCard}</p>
      <p>This card: {nextCard}</p>
      <p>{currentSelected}</p>
      <p>{score}</p>
    </div>
  );
};

export default Score;
