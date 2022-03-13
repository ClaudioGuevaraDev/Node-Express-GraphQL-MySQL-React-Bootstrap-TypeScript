const Login = () => {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card border-secondary mb-3">
            <div className="card-header d-flex align-item-center justify-content-center">
              <span className="display-6 fw-bold text-center">
                Login to your account
              </span>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label className="form-label mb-2" htmlFor="usernameInput">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label mb-2" htmlFor="passwordInput">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-primary w-100 btn-lg">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
