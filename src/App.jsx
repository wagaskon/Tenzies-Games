import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import Die from './Die'

function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
  }

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  
  useEffect(() => {
    // Holding Dices
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
      }
  }, [dice])
// Random Number Generation 
  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}
function rollDice() {
    if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
}

function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}

const diceElements = dice.map(die => (
    <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)}
    />
))
//   const confetti = require('canvas-confetti');
{/*  */}
  return (
    <main>
    {tenzies &&  <Confetti
     
    />}
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. 
    Click each die to freeze it at its current value between rolls.</p>
    <div className="dice-container">
        {diceElements}
    </div>
    <button 
        className="roll-dice" 
        onClick={rollDice}
    >
    {tenzies ? "New Game" : "Roll"}
    </button>
  </main>
  )
}

export default App
