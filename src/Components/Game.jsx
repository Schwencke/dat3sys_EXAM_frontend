import Button from "./Button";
import Card from "./Card";
import React, { useState, useEffect, useReducer } from "react";
import Score from "./Score";
import Rules from "./Rules";
import { Container } from "react-bootstrap";

const winOrLose = (value1, prev1, selec) => {
  let value = value1;
  let prev = prev1;

  if (value1 === "JACK") {
    value = 11;
  }
  if (prev1 === "JACK") {
    prev = 11;
  }
  if (value1 === "QUEEN") {
    value = 12;
  }
  if (prev1 === "QUEEN") {
    prev = 12;
  }
  if (value1 === "KING") {
    value = 13;
  }
  if (prev1 === "KING") {
    prev = 13;
  }
  if (prev1 === "ACE" && selec === "over") {
    prev = 1;
  }
  if (prev1 === "ACE" && selec === "under") {
    prev = 1;
  }

  if (value1 === "ACE" && selec === "over" && prev >= 1) {
    value = 14;
  }
  if (value1 === "ACE" && selec === "under" && prev >= 1) {
    value = 1;
  }

  if (value1 === "10") {
    value = 10;
  }
  if (prev1 === "10") {
    prev = 10;
  }

  switch (selec) {
    case "over":
      if (value >= prev) {
        console.log(value + "vs" + prev + ">=" + "true");
        return true;
      } else console.log(value + "vs" + prev + ">=" + "false");
      return false;
    case "under":
      if (value <= prev) {
        console.log(value + "vs" + prev + "<=" + "true");
        return true;
      } else console.log(value + "vs" + prev + "<=" + "false");
      return false;
    case "first":
      return;
    default:
      console.log("default1");
      return true;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "new_deck":
      return {
        selected_type: "first",
        previous_card: action.payload.value,
        deck_id: action.payload.deck_id,
        image: action.payload.image,
        remaining: action.payload.remaining,
        value: action.payload.value,
      };
    case "new_card":
      return {
        previous_card: state.value,
        selected_type: action.selected_type,
        deck_id: state.deck_id,
        image: action.payload.image,
        remaining: action.payload.remaining,
        value: action.payload.value,
        win: winOrLose(action.payload.value, state.value, action.selected_type),
      };
    default:
      return;
  }
}

export default function Game({
  facade,
  score,
  setScore,
  showRules,
  setShowRules,
}) {
  const [state, dispatch] = useReducer(reducer, {
    selected_type: "first",
    deck_id: "0",
    image: "0",
    remaining: "10",
    value: "0",
    win: true,
  });
  const [selectedType, setSelectedType] = useState();
  const [firstGame, setFirstGame] = useState(true);
  const [toggle, setToggle] = useState(true);
  let passTurns = 3;
  const [count, setCount] = useState(passTurns);
  const [disable, setDisable] = useState(true);
  const [passText, setPassText] = useState("Pass on in " + passTurns);

  const first = () => {
    setScore(1);
    newDeck();
  };

  const newDeck = () => {
    facade.fetchData("card").then((data) => {
      dispatch({ type: "new_deck", payload: data });
      setFirstGame(false);
    });
  };

  const dothisover = () => {
    setSelectedType("over");
    setToggle(!toggle);
  };
  const dothisunder = () => {
    setSelectedType("under");
    setToggle(!toggle);
  };

  useEffect(() => {
    if (firstGame) {
      first();
    }
    if (state.remaining === "0") {
      console.log("shuffle");
    } else {
      facade.fetchData(`card/draw/${state.deck_id}`).then((data) => {
        dispatch({
          type: "new_card",
          selected_type: selectedType,
          payload: data,
        });

        if (count > 0) {
          setCount(count - 1);
          setPassText("Pass on in " + (count - 1));
        }

        if (count === 1) {
          setDisable("");
          setPassText("PASS TURN");
        }
      });
    }
  }, [toggle]);

  const pass = () => {
    if (count === 0) {
      setCount(3);
      setDisable(true);
      setPassText("Pass on in " + passTurns);
    }
  };

  const previousCard = () => {
    if (state.selected_type != "first"){
      return "Previous card is: " + state.previous_card
    }
  }

  return (
    <Container fluid>
      <div className="containerdiv">
        <p>
          Deck ID: {state.deck_id} <br />
           {/* Remaining in stack: {state.remaining}{" "}
          <br />
          This Card: {state.value} <br />
          Prev Card: {state.previous_card} <br />
          Selected : {state.selected_type} <br />
          win: {state.win + " state"} */}
        </p>
        <Card image={state.image} />
        <Score
          win={state.win}
          firstGame={firstGame}
          toggle={toggle}
          score={score}
          setScore={setScore}
        />
        <p style={{marginTop: 20, fontWeight: 600, fontSize: 20}}>{previousCard()}</p>
        <div style={{marginTop: 30}}>
        <Button
          text={"Over"}
          onClick={dothisover}
        />
        <Button
          text={"Under"}
          onClick={dothisunder}
        />
        <Button disable={disable} onClick={pass} text={passText} />
        <Button onClick={() => setShowRules(true)} text="?" /> <br />
        </div>
      </div>
      <Rules showRules={showRules} setShowRules={setShowRules} />
    </Container>
  );
}
