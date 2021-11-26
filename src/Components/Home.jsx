import React from 'react'
import "../App.css"
import Game from './Game';

const Home = ({facade}) => {
    return (
      <div className="containerdiv">

      <div>
          <Game Facade={facade}/>
      </div>
      <hr/>
      <div className="backgroundC">
          <form>
              <button className="btns">Over</button>
              <button className="btns">Under</button>
          </form>
          </div>
  </div>
    )
}

export default Home
