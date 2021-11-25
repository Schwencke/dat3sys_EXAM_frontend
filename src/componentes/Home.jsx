import React from 'react';
import Test from './Test';



export default function Home(Facade){
    return(

    <div style={{textAlign:"center"}}>

        <div>
            <Test Facade={Facade}/>
        </div>
        <hr/>
        <div style={{backgroundColor:"cyan"}}>
            <form>
                <button style={{backgroundColor:"#4CAF50",
border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  TextDecoder: "none",
  display: "inline-block",
  fontSize: "16px",
  margin:"30px",
  }} >Over</button>
                <button style={{backgroundColor:"#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            TextDecoder: "none",
            display: "inline-block",
            fontSize: "16px",
            }} >Under</button>
            </form>
            </div>
    </div>

    )
};