const Header = (props) => {
  return(
    <>
      <section className="d-flex flex-row justify-content-end text-white">
        <a className="btn font-weight-bold" onClick={props.onClickHome}>Home</a>
        <a className="btn font-weight-bold" onClick={props.onClickLogin}>Login</a>
      </section>
    </>
  )
}

export default Header