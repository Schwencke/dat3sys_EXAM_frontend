import Button from "./Button";
import Card from "./Card";
import React, { useState, useEffect, useReducer } from "react";



function reducer(state, action) {
  switch (action.type) {
    case "new_deck":
      return {
        deck_id: action.payload.deck_id,
        remaining: action.payload.remaining,
        value: action.payload.value,
        image: action.payload.image,
      };
    case "new_card":
      return {
        deck_id: action.payload.deck_id,
        remaining: action.payload.remaining,
        value: action.payload.value,
        image: action.payload.image,
      };
    case "shuffle":
      return {
        deck_id: state.deck_id,
        remaining: action.payload.remaining,
        value: state.value,
        image: state.image,
      };
    default:
      return state;
  }
}

export default function Test({ facade }) {

  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(true);

  // useReducer er som pandant til useState brugt til at kontrollere en mere complex state
  const [state, dispatch] = useReducer(reducer, {
    deck_id: "",
    remaining: "",
    value: "",
    image: "",
  });
  const [score, setScore] = useState(0);

  const newDeck = () => {
    facade.fetchData("card").then((data1) => {
      dispatch({ type: "new_deck", payload: data1 });
      console.log("fetch new deck");
    });
  };
  const newCard = () => {
    if (state.remaining === "0") {
      shuffleDeck();
    }
    else {
      setScore(score + 1);
      facade.fetchData(`card/draw/${state.deck_id}`).then((data) => {
        dispatch({ type: "new_card", payload: data });
        if (count > 0) {
          setCount(count - 1)
        }

        if (count === 1) {
          setDisable("")
        }
        console.log("fetch new card");
      }
      )
    }

  };

  const shuffleDeck = () => {
    facade.fetchData(`card/shuffle/${state.deck_id}`).then((data) => {
      dispatch({ type: "shuffle", payload: data });
      console.log("shuffleing current deck");
    });
  };

  const pass = () => {
    if (count === 0) {
      setCount(3)
      setDisable(true)
    }
  }

  useEffect(() => {
    newDeck();
  }, []);

  return (
    <div>
      <p>Score: {score}</p>
      <p>
        Deck ID: {state.deck_id} <br /> Remaining in stack: {state.remaining}
      </p>
      <Card image={state.image} />
      <p>You had choised {count} times</p>
      <hr />
      <Button text={"Over"} onClick={newCard} />
      <Button text={"Under"} onClick={newCard} />
      <Button text={"New Deck"} onClick={newDeck} />
      {/* <Button disabled={disable} onClick={() => { setCount(3) }} text="Pass" /> */}
      <Button disable={disable} onClick={pass} text="Pass" />
    </div>
  );
}