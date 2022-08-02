const Card = (props) => {
  return(
    <>
      <div className="card col-4">
        <img className="card-img-top" src={props.pokemonImage.other["official-artwork"].front_default} alt="pokemon"/>
        <div className="card-body">
          <h2 className="card-title text-capitalize">{props.pokemonName}</h2>
          <p className="card-text"><span className="font-weight-bold">Height: </span>{props.pokemonHeight}</p>
          <p className="card-text"><span className="font-weight-bold">Weight: </span>{props.pokemonWeight} </p>
          <span className="font-weight-bold">Types: </span>
          <ul className="card-text">

            {props.pokemonTypes.map((item, i) => {
              return(
                <li key={i}>{item.type.name}</li>
              )
            })}

          </ul>
        </div>
      </div>
    </>
  )
}

export default Card