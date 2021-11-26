import React,{useState,useEffect} from 'react'

export default function Test({Facade}){

const [list, setlist] = useState({})
const updateList = (data) => {
    setlist({
    cards: data,
    });
};

useEffect(()=> {
    Facade.fetchData('card', updateList);
},[Facade]);



    return(
        <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"burlywood"}}>
        {(list.cards && list) &&
            <div>
            <img src={list.image} alt="image"></img>
            </div>
        }    
        </div>
    )
}