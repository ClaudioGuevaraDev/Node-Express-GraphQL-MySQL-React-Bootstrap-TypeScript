import { useState } from "react"

const Register = () => {
  const [usernameValue, setUsernameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [confirmPasswordValue, setConfirmPassword] = useState("")

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card border-secondary mb-3">
            <div className="card-header d-flex align-item-center justify-content-center">
              <span className="display-6 fw-bold">Create an account</span>
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
                  <label className="form-label mb-2" htmlFor="emailInput">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter Email"
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
                <div className="form-group mb-3">
                  <label
                    className="form-label mb-2"
                    htmlFor="confirmPasswordInput"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPasswordInput"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-primary w-100 btn-lg">
                      Register
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

export default Register;
