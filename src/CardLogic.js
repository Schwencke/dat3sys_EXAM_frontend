import { useEffect } from "react";

// const checkCard = (card, currentSelected) => {
//   switch (card) {
//     case "ACE":
//       if (currentSelected === "under") {
//         return 1;
//       }
//       if (currentSelected === "over") {
//         return 14;
//       }
//     case "JACK":
//       return 11;

//     case "QUEEN":
//       return 12;

//     case "KING":
//       return 13;

//     default:
//       console.log(card + "was returned")
//       return card;
//   }
// };

var WinOrLoose = function (currentCard, nextCard, currentSelected){
  var current = checkCard(currentCard, currentSelected);
  var next = checkCard(nextCard, currentSelected);

  switch (currentSelected) {
    case "over":
      if (current == next){
        console.log( current + "==" + next)
        return true;
      }
      if (current < next) {
        console.log( current + "<" + next)
        return true;
      }
      if (current > next) {
        console.log( current + ">" + next)
        return false;
      }
    case "under":
      if (current == next){
        console.log( current + "==" + next)
        return true;
      }
      if (current > next) {
        console.log( current + ">" + next)
        return true;
      }
      if (current < next) {
        console.log( current + "<" + next)
        return false;
      }
    default:
      return true;
}}


export default WinOrLoose;
