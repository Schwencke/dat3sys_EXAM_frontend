import React,{useState,useEffect} from 'react'

export default function Game({facade,setErrorMessage}){

const [oldcard, setOldCard] = useState({oldcard:{},oldvalue:"",oldimage:""})

const updateAction = (data) => {
    setOldCard({
    oldcard: data,
    oldimage: data.image,
    oldvalue:data.value,
    });
};

useEffect(()=> {
    facade.fetchData('card', updateAction ,setErrorMessage);
},[facade,setErrorMessage]);

    return(
        <div className="main-content container" style={{margin:"30px",alignItems:"center",backgroundColor:"burlywood"}}>
            <div>
            <h3>{oldcard.oldvalue}</h3>
            </div>
            <div>
            <img src={oldcard.oldimage}></img>
            </div>
            
        </div>
    )
}