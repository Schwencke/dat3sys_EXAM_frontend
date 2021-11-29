import React, { useReducer, useState } from 'react'

function init(state){
    return {
        count: state
    };
}

function countReducer(state, action){
    if(action.type === 'Over')
        return {count: state.count + action.payload};
    if(action.type === 'Under')
        return {count: state.count - 1};
    if(action.type === 'RESET')
        return init(0);
    
    throw new Error(action.type + ' is not defined in count reducer.');
}

export default function Button() {
    const [state, dispatch] = useReducer(countReducer, 0, init);

    return (
        <div>
            count: {state.count}
            <hr/>
            <br />
            <button onClick={() => dispatch({type: 'Over', payload: 2})}>Over</button>
            <button onClick={() => dispatch({type: 'Under'})}>Under</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </div>
    )
}