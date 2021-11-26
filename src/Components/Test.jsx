import React,{useState,useEffect} from 'react'

export default function Test({Facade}){

const [list, setlist] = useState({cards:[]})
const updateList = (data) => {
    setlist({
    cards: data,
    });
};

useEffect(()=> {
    Facade.fetchData('deck/new/draw/?count=1', updateList);
},[Facade]);


    return(
        <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"burlywood"}}>
        {(list.cards && list.cards.cards) &&
            <div>
            <img src={list.cards.cards[0].image}></img>
            </div>
        }    
        </div>
    )
}