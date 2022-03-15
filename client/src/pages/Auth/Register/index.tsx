import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { REGISTER_USER } from "../../../queries/auth";

const Register = () => {
  const navigate = useNavigate();

  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPassword] = useState("");

  const [registerUser, result] = useMutation(REGISTER_USER, {
    onError: (error) => {
      toast(error.graphQLErrors[0].message, {
        type: "error",
      });
    },
  });

  useEffect(() => {
    if (result.data) {
      toast(result.data.registerUser.message, {
        type: "success",
      });
      navigate("/login");
    }
  }, [result.data]);

  const handleChangeUsernameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameValue(e.target.value);
  };

  const handleChangeEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleChangePasswordValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleChangeConfirmPasswordValue = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    };

    registerUser({ variables: { user } });

    setUsernameValue("");
    setEmailValue("");
    setPasswordValue("");
    setConfirmPassword("");
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="card border-secondary mb-3">
            <div className="card-header d-flex align-item-center justify-content-center">
              <span className="display-6 fw-bold">Create an account</span>
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
                  <label className="form-label mb-2" htmlFor="emailInput">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter Email"
                    value={emailValue}
                    onChange={handleChangeEmailValue}
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
                    value={confirmPasswordValue}
                    onChange={handleChangeConfirmPasswordValue}
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-primary w-100 btn-lg"
                      type="submit"
                    >
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
