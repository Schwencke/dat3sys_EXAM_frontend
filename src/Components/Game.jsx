import Button from "./Button";
import Card from "./Card";
import React, { useState, useEffect, useReducer } from "react";

const winOrLoose = (state) => {
      if (state !=undefined){
  switch (state.selected_type) {
    case "over":
      // if (currentCard === prevCard){
      //  // console.log( currentCard + "==" + prevCard +"from over")
      //   return setScore(score +1);
      // }
      if (state.value >= state.previous_card) {
     //   console.log( currentCard + "<" + prevCard)
        return console.log("win")
      } else return console.log("you lost")
    case "under":
      // if (currentCard === prevCard){
      // //  console.log( currentCard + "==" + prevCard + "from under")
      //   return setScore(score +1);
      // }
      if (state.value <= state.previous_card) {
      //  console.log( currentCard + ">" + prevCard)
        return console.log("win")
      }else return console.log("you lost" +(state.value) + (state.previous_card))
    case 'first':
        return;
    default:
        console.log("default")
      return true;
}
}}

const checkValue = (card, selectedType) => {
  switch (card) {
    case "ACE":
      // if (selectedType === "over") {
      //   return 14;
      // }
      // if (selectedType === "first") {
      //   return 1;
      // }
      // if (selectedType === "under") {
        return 1;
      
    case "JACK":
      return 11;
    case "QUEEN":
      return 12;
    case "KING":
      return 13;
    default:
      return card;
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "new_deck":
      return {
        selected_type: "first",
        previous_card: checkValue(action.payload.value, "first"),
        deck_id: action.payload.deck_id,
        image: action.payload.image,
        remaining: action.payload.remaining,
        value: checkValue(action.payload.value, "first"),
      };
    case "new_card":
      return {
        previous_card: state.value,
        selected_type: action.selected_type,
        deck_id: state.deck_id,
        image: action.payload.image,
        remaining: action.payload.remaining,
        value: checkValue(action.payload.value, action.selec),
      };
  }
}

export default function Game({ facade }) {
  const [state, dispatch] = useReducer(reducer, {
    selected_type: "first",
    deck_id: "0",
    image: "0",
    remaining: "10",
    value: "0",
  });
  const [selectedType, setSelectedType] = useState();
  const [deck, setDeck] = useState({ deck_id: "", remaining: "", value: "" });
  const [firstCard, setFirstCard] = useState(0);
  const [thisCard, setThisCard] = useState(0);
  const [prevCard, setPrevCard] = useState();
  const [firstGame, setFirstGame] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [outcome, SetOutCome] = useState("noes");

  // const checkValue = (card) => {
  //   switch (card) {
  //     case "ACE":
  //       if (
  //         (selectedType === "over" && prevCard > 1)
  //       ) {
  //         return 14;
  //       }
  //       if  (selectedType === "under" && prevCard < 14)
  //       {return 1;}
  //     case "JACK":
  //       return 11;
  //     case "QUEEN":
  //       return 12;
  //     case "KING":
  //       return 13;
  //     default:
  //       return card;
  //   }
  // };

  // const newDeck = () => {
  //   facade.fetchData("card").then((data) => {
  //     dispatch({type: 'new_deck', payload: data})
  //     // setDeck(data);
  //     // setFirstCard(checkValue(data.value));
  //     // setThisCard(checkValue(data.value));
  //     // setPrevCard(checkValue(data.value));
  //   });
  // };

  const first = () => {
    newDeck();
  };

  const newDeck = () => {
    facade.fetchData("card").then((data) => {
      dispatch({ type: "new_deck", payload: data });
      setFirstGame(false);
    });
  };
  // const newCard = () => {
  //   if (state.remaining === "0") {
  //     shuffleDeck();
  //   } else {
  //     facade.fetchData(`card/draw/${state.deck_id}`).then((data) => {
  //       dispatch({ type: "new_card", payload: data });
  //     });
  //   }
  // };

  // const newCard = () => {
  //   if (deck.remaining === "0") {
  //     console.log("shuffle");
  //   } else {
  //     facade.fetchData(`card/draw/${deck.deck_id}`).then((data) => {
  //       setDeck(data);
  //       setPrevCard(checkValue(thisCard));
  //       //if (checkValue(thisCard) < data.value) setScore(score +1)
  //       setThisCard(checkValue(data.value));

  //     });
  //   }
  // };
  
    const winOrLoose = () => {
      
  switch (selectedType) {
    case "over":
      // if (currentCard === prevCard){
      //  // console.log( currentCard + "==" + prevCard +"from over")
      //   return setScore(score +1);
      // }
      if (state.value >= state.previous_card) {
     //   console.log( currentCard + "<" + prevCard)
        return console.log("win")
      } else return console.log("you lost")
    case "under":
      // if (currentCard === prevCard){
      // //  console.log( currentCard + "==" + prevCard + "from under")
      //   return setScore(score +1);
      // }
      if (state.value <= state.previous_card) {
      //  console.log( currentCard + ">" + prevCard)
        return console.log("win")
      }else return console.log("you lost" +(state.value) + (state.previous_card))
    case 'first':
        return;
    default:
        console.log("default")
      return true;
}
}

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
        winOrLoose(dispatch({ type: "new_card", selected_type: selectedType, payload: data }));
      });
      // dispatch({type: "win_loose"})
    }
  }, [toggle]);

  return (
    <div>
      {/* <Score currentCard={thisCard} prevCard={prevCard} selected={selectedType} toggle={toggle}/> */}

      <p>
        Deck ID: {state.deck_id} <br /> Remaining in stack: {state.remaining}{" "}
        <br />
        This Card: {state.value} <br />
        Prev Card: {state.previous_card} <br />
        Selected : {state.selected_type} <br />
      </p>

      <Card image={state.image} />
      <Button text={"Over"} onClick={dothisover} />
      <Button text={"Under"} onClick={dothisunder} />
    </div>
  );
}
