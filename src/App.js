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
    fetchData(1)
  }, [])



  const fetchData = async (id) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const response = await request.json()
    setPokemon(response)
  }

  const handleChangeId = () => {
    const max = 151;
    const min = 1;
    const getRndInteger = Math.floor(Math.random() * (max - min + 1) ) + min;


    fetchData(getRndInteger)
  }


  const handleClickHome = () => {
    setIsHome(true)
  }

  const handleClickLogin = () => {
    setIsHome(false)
  }

  if (!pokemon) {
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
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
          <Button onClick={handleChangeId}/>
        </section>
      ) : (
        <LoginPage/>
      )}
    </>
  )
}

export default App
