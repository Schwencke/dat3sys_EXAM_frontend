import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Score = ({ win, firstGame, toggle, score, setScore }) => {
  let history = useHistory();

  const lose = () => {
    setTimeout(() => {
      history.push("/lose");
    }, 2000);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    if (!firstGame) {
      if (win === true) return incrementScore();
      if (win === false) {
        lose();
      }
    }
  }, [win, toggle]);

  return <p style={{marginTop: 20, fontWeight: 600, fontSize: 20}}>The Score is: {score}</p>;
};

export default Score;
