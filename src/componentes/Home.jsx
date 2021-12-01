import React from 'react';
import Game from './Game';
import Test from './Test'
import facade from '../apiFacade';
import Button from './Button';


export default function Home(){
    return(

    <div style={{textAlign:"center"}}>
            <Test facade={facade}/>
    </div>

    )
};