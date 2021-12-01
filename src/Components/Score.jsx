import { useState, useEffect } from "react"

const Score = ({currentCard, prevCard, selected, toggle}) => {



        const winOrLoose = () => {
            if (prevCard != undefined){
        switch (selected) {
          case "over":
            // if (currentCard === prevCard){
            //  // console.log( currentCard + "==" + prevCard +"from over")
            //   return setScore(score +1);
            // }
            if (currentCard >= prevCard) {
           //   console.log( currentCard + "<" + prevCard)
              return setScore(score +1);
            }
            if (currentCard < prevCard) {
            //  console.log( currentCard + ">" + prevCard)
            console.log("you lost")
            return;
            }
          case "under":
            // if (currentCard === prevCard){
            // //  console.log( currentCard + "==" + prevCard + "from under")
            //   return setScore(score +1);
            // }
            if (currentCard <= prevCard) {
            //  console.log( currentCard + ">" + prevCard)
              return setScore(score +1);
            }
            if (currentCard > prevCard) {
             // console.log( currentCard + "<" + prevCard)
             console.log("you lost")
             return;
            }
          case 'first':
              return;
          default:
              console.log("default")
            return true;
      }
    }}

    const [score, setScore] = useState(0)

    useEffect(() => {
       // console.log(currentCard, prevCard, selected)
        winOrLoose(currentCard, prevCard, selected)
    }, [toggle])

    return (
        <p>The Score is: {score}</p>
    )
}

export default Score
