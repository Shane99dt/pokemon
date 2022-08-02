import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"
import Header from "./components/Header"
import LoginPage from "./components/LoginPage"
import './App.css'

const App = () => {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonName, setPokemonName] = useState(null)
  const [pokemonImage, setPokemonImage] = useState(null)
  const [pokemonHeight, setPokemonHeight] = useState(null)
  const [pokemonWeight, setPokemonWeight] = useState(null)
  const [pokemonTypes, setPokemonTypes] = useState(null)
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
    console.log(response)

    setPokemon(response)
    setPokemonName(response.name)
    setPokemonHeight(response.height)
    setPokemonWeight(response.weight)
    setPokemonTypes(response.types)
    setPokemonImage(response.sprites)
    console.log(pokemon, "pokemon")
    // console.log(pokemonName, "pokemon name")
  }

  // setPokemon(pokemon)
  // setPokemonName(pokemon.name)
  // setPokemonHeight(pokemon.height)
  // setPokemonWeight(pokemon.weight)
  // setPokemonTypes(pokemon.types)
  // setPokemonImage(pokemon.sprites)

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
            pokemonName = {pokemonName}
            pokemonHeight = {pokemonHeight}
            pokemonWeight = {pokemonWeight}
            pokemonTypes = {pokemonTypes}
            pokemonImage = {pokemonImage}
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
