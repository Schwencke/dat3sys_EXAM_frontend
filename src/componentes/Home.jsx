import React,{useState,useEffect} from 'react';
import Game from './Game';
import facade from '../apiFacade';
import Button from './Button';



export default function Home(){
    const [newcard,setNewCard]= useState({newcard:{},newimage:"",newvalue:""})
   
   


    return(

    <div style={{textAlign:"center"}}>

        <div>
            <Game facade={facade}/>
            <Button/>
        </div>
       
        <div style={{backgroundColor:"cyan"}}>
           
            </div>
    </div>

    )
};