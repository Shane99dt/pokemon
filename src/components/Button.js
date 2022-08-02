const Button = (props) => {
  return (
    <>
      <button className="btn btn-randomPokemon col-4 mt-3" onClick={props.onClick}>
        Show random Pokemon
      </button>
    </>
  )
}

export default Button