const LoginPage = () => {
  return(
    <>
      <section className="d-flex justify-content-center align-items-center">
        <form className="col-5 text-white font-weight-bold">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
          </div>
          <button type="submit" className="btn btn-primary btnLogin text-dark font-weight-bold">Submit</button>
        </form>
      </section>
    </>
  )
}

export default LoginPage