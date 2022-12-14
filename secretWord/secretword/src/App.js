//CSS
import './App.css';

//React
import {useCallback, useEffect, useState} from 'react'

//Data
import { wordsList } from './data/words';

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0]. name);
  const [words] = useState(wordsList);

  const [pickedword, setPickedWord] = useState("")
  const [pickedcategory, setPickedCaregory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () =>{
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return {word, category}
  }

  //starts the secrete word game
  const startGame = () => {
    //pick word and picked category
    const {word, category} = pickWordAndCategory()

    console.log(word, category)

    //create array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)

    //fill states
    setPickedWord(word)
    setLetters(letters)
    setPickedCaregory(category)

    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
