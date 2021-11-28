import Button from "./Button"
import Card from "./Card"
import React, { useState, useEffect, useReducer } from 'react'


function reducer(state, action){
    switch (action.type){
        case 'new_deck':
       return {deck_id: action.payload.deck_id, remaining: action.payload.remaining, value: action.payload.value, image: action.payload.image}
        case 'new_card':
        return {deck_id: action.payload.deck_id, remaining: action.payload.remaining, value: action.payload.value, image: action.payload.image}
        case 'shuffle':
            return{deck_id: state.deck_id, remaining: action.payload.remaining, value: state.value, image: state.image}
        default: return state
    }
}

export default function Game({ facade }) {
    const [state, dispatch] = useReducer(reducer, {deck_id: '', remaining: '', value: '', image: ''})
    const [score, setScore] = useState(0)

    const newDeck = () => {
        facade.fetchData('card').then(data => {
            dispatch({type:'new_deck',payload: data})
            console.log("fetch new deck")
        })
    }
    const newCard = () => {
        if (state.remaining === '0'){
          shuffleDeck()
        }else{
            setScore(score + 1)
        facade.fetchData(`card/draw/${state.deck_id}`).then(data => {
            dispatch({type:'new_card',payload: data})
            console.log("fetch new card")
        })}
    }

    const shuffleDeck = () => {
        facade.fetchData(`card/shuffle/${state.deck_id}`).then(data => {
            dispatch({type:'shuffle', payload: data})
            console.log("shuffleing current deck")
        })
            
    }

    useEffect(() => {
        newDeck()
    }, [])

    return (
        <div>
            <p>Score: {score}</p>
            <p>Deck ID: {state.deck_id} <br /> Remaining in stack: {state.remaining}</p>
            <Card image={state.image} />
            <Button text={'Over'} onClick={newCard} />
            <Button text={'Under'} onClick={newCard}/>
            <Button text={'GET ME A NEW DECK NOW'} onClick={newDeck}/>
        </div>
    )
}