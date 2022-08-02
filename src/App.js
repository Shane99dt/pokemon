import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState(null)
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const fetchData = async () => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRndInteger(1,151)}`)
    const response = await request.json()
    setPokemon(response)
  }


  const handleClickHome = () => {
    setIsHome(true)
  }

  const handleClickLogin = () => {
    setIsHome(false)
  }

  if (!pokemon) {
    return null;
  }

  return(
    <>
      <header>
        <Header
          onClickHome = {handleClickHome}
          onClickLogin = {handleClickLogin}
        />
      </header>
      {isHome ? (
        <section className="d-flex flex-column align-items-center justify-content-center mt-5 gap-5">
          <Card
            pokemonName = {pokemon.name}
            pokemonHeight = {pokemon.height}
            pokemonWeight = {pokemon.weight}
            pokemonTypes = {pokemon.types}
            pokemonImage = {pokemon.sprites}
          />
          <Button onClick={fetchData}/>
        </section>
      ) : (
        <LoginPage/>
      )}
    </>
  )
}

export default App
