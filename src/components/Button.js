const Button = (props) => {
  return (
    <>
      <button className="btn btn-randomPokemon mt-3" onClick={props.onClick}>
        Show random Pokemon
      </button>
    </>
  )
}

export default Button