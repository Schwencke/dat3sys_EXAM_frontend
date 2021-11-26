import Button from "./Button"
import Card from "./Card"
import React,{useState,useEffect} from 'react'

export default function Game({facade}){
   
const [card, setCard] = useState({value: '', image: ''})
const [deck, setDeck] = useState({deck_id:'', remaining:''})
const [toggle, setToggle] = useState(false)
const updateCard = (data) => {
    setCard(data)
};
const updateDeck = (data) => {
    setDeck(data)
}

const update = () => {
    setToggle(!toggle)
}

useEffect(()=> {
    console.log(deck.deck_id)
   // if(deck.deck_id === undefined){
    facade.fetchData('card', updateDeck);
   
    //}else{ facade.fetchData(`card/draw/${deck.deck_id}`,updateCard)}
   
},[facade]);



    return(
        <div>
        <Card src={card.image}/>
        <Button text={'Over'} onClick={update}/>
        <Button text={'Under'} onClick={update}/>
        </div>
        // <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"burlywood"}}>
        // {(list.cards && list.cards.cards) &&
        //     <div>
        //     <img src={list.cards.cards[0].image}></img>
        //     </div>
        // }    
        // </div>
    )
}