import { useState, useEffect } from "react";
import { CardLogic } from "../CardLogic";
const Score1 = ({ currentCard, nextCard, currentSelected }) => {
  const checkCurrent = () => {
    switch (currentCard) {
      case "ACE":
        if (currentSelected === 'under') {
          return 1;
        }
        if (currentSelected === 'over') {
          return 14;
        }
      case "JACK":
        return 11;

      case "QUEEN":
        return 12;

      case "KING":
        return 13;

      default:
        return currentCard;
    }
  };

  const checkNext = () => {
    switch (nextCard) {
      case "ACE":
        if (currentSelected === 'under') {
          return 1;
        }
        if (currentSelected === 'over') {
          return 14;
        }
      case "JACK":
        return 11;

      case "QUEEN":
        return 12;

      case "KING":
        return 13;

      default:
        return currentCard;
    }
  };

  const [score, setScore] = useState(0);
  const [win, setWin] = useState(true);

  const winOrLoose = () => {
      switch (currentSelected) {
        case "over":
          if (checkCurrent() < checkNext()) {
            setScore(score + 1);
            setWin(true);
          }
          if (checkCurrent() > checkNext()) {
            setWin(false);
            break;
          }
        case "under":
          if (checkCurrent() > checkNext()) {
            setScore(score + 1);
            setWin(true);
          }
          if (checkCurrent() < checkNext()) {
            setWin(false);
          }
          break;

        default:
          console.log("default");
      }
  };

  useEffect(() => {
    winOrLoose();
    console.log(win)
  }, [currentCard]);

  if (win === true) {
    return (
      <div>
        <p>Current Score {score}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>You lost! drink {score} sips!</p>
      </div>
    );
  }
};

export default Score;
