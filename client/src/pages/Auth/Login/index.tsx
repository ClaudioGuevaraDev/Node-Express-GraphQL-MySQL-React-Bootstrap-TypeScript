import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { LOGIN } from "../../../queries/auth";

const Login = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      toast(error.graphQLErrors[0].message, {
        type: "error",
      });
    },
  });

  useEffect(() => {
    if (result.data) {
      window.localStorage.setItem("token", result.data.login.token);
    }
  }, [result.data]);

  const handleChangeUsernameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };

  const handleChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username: usernameValue,
      password: passwordValue,
    };

    login({ variables: { user } });

    setUsernameValue("");
    setPasswordValue("");
  };

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
              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label mb-2" htmlFor="usernameInput">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="Enter Username"
                    value={usernameValue}
                    onChange={handleChangeUsernameValue}
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
                    value={passwordValue}
                    onChange={handleChangePasswordValue}
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
