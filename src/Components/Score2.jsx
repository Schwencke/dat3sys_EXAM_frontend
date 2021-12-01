import React, { useState, useEffect, useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "play":
      console.log("GAME INIT")
      return {
        init: false,
        win: true,
        current_card: action.payload.firstCard,
        score: state.score,
        next_card: action.payload.firstCard,
        current_selected: action.payload.currentSelected,
      };

      case "win":
        console.log("YOU WIN")
        return {
          init: false,
          win: true,
          current_card: action.payload.nextCard,
          score: state.score + 1,
          next_card: action.payload.currentCard,
          current_selected: action.payload.currentSelected,
        };
    

        case "loose":
          console.log("YOU LOOSE")
        return {
          init: false,
          win: false,
          current_card: action.payload.nextCard,
          score: state.score,
          next_card: action.payload.currentCard,
          current_selected: action.payload.currentSelected,
        };

    default:
      return state;
  }
}

const Score = ({firstCard, currentCard, nextCard, currentSelected,cardLogic}) => {

  const [state, dispatch] = useReducer(reducer, {
    init: true,
    win: true,
    current_card: '',
    score: 0,
    next_card: '',
    current_selected: '',
  });

  const handleWinLoose = ()  => {
    if (state.init === true){
    dispatch({type: 'play', payload: {firstCard, currentSelected}})
    } else {
    if (cardLogic.winOrLoose(nextCard, currentCard, currentSelected)){
      console.log(cardLogic.winOrLoose(nextCard, currentCard, currentSelected))
      dispatch({type: 'win', payload: {currentCard, nextCard, currentSelected}})
    } else dispatch({type: 'loose', payload: {currentCard, nextCard, currentSelected}})
  }}


  useEffect(() => {
    console.log("useEffect")
     handleWinLoose()
  }, [currentSelected])

  return (
    <div>
      <p>Previous card: {state.next_card}</p>
      <p>This card: {state.current_card}</p>
      <p>{state.current_selected}</p>
      <p>{state.score}</p>
    </div>
  )
}

export default Score
