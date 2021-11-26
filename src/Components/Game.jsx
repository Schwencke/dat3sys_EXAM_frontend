import Button from "./Button"
import Card from "./Card"
import React, { useState, useEffect } from 'react'

export default function Game({ facade }) {

    const [card, setCard] = useState({ value: '', image: '' })
    const [deck, setDeck] = useState({ deck_id: '', remaining: '' })

    const updateCard = (data) => {
        console.log('NEW CARD', data)
        setCard(data)
    }

    const updateDeck = (data) => {
        console.log('NEW DECK', data)
        setDeck({ deck_id: data.deck_id, remaining: data.remaining })
    }

    const update = () => {
        if (deck.deck_id !== '') {
            facade.fetchData(`card/draw/${deck.deck_id}`, updateCard)
        }
    }

    useEffect(() => {
        if (deck.deck_id === '') {
            facade.fetchData('card', updateDeck);
        }
    }, [facade, deck.deck_id])

    return (
        <div>
            <Card src={card.image} />
            <Button text={'Over'} onClick={update} />
            <Button text={'Under'} onClick={update} />
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