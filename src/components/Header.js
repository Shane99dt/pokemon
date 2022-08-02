const Header = (props) => {
  return(
    <>
      <section className="d-flex flex-row justify-content-end text-white pt-3">
        <a className="btn font-weight-bold pr-4" onClick={props.onClickHome}>Home</a>
        <a className="btn font-weight-bold pr-4" onClick={props.onClickLogin}>Login</a>
      </section>
    </>
  )
}

export default Header