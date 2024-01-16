import React, { useEffect } from "react";
import bigLogo from "../../assets/images/big_logo.png";
import "./login.css";

const LoginPage = () => {
    useEffect(() => {
        document.body.classList.add("login-body");
        document.getElementById("root").classList.add("login-root");

        return () => {
            document.body.classList.remove('login-body');
            document.getElementById("root").classList.remove('login-root');
        };
    }, []);

  return (
    <div className="container login mx-auto">
      <div className="login-div mt-5 mb-5 row w-80 mx-auto">
        <div className="col-md-6 px-5">
          <h4 className="text-center welcome-text mt-5">BIENVENUE DANS</h4>
          <div className="logo-div mt-4">
            <img className="logo" src={bigLogo} alt="" />
          </div>
          <div className="welcome-p mt-3">
            Pret a gerer car looking, veuillez vous connecter <br /> tout
            d'abord !
          </div>

          <form action="" className="mt-5">
            <div className="input-container mb-4">
              <input
                className="login-input"
                type="text"
                name="username"
                placeholder="Username"
              />
              <i className="far fa-user"></i>
            </div>
            <div className="input-container mb-4">
              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <i className="fas fa-lock"></i>
            </div>
            <div className="input-container">
              <input
                type="submit"
                className="submit-button"
                value="SE CONNECTER"
              />
            </div>
          </form>
          <p className="signup-text mt-3">
            N' a pas encore de compte ?{" "}
            <span className="signup-link">Cree un compte</span>
          </p>
        </div>
        <div className="col-md-6 image-display">
          <div className="background-red-effect d-flex justify-content-center align-items-center">
            <div className="middle-text">
              <h4 className="text-white">CAR LOOKING</h4>
              <p className="welcome-p text-white mt-3">
                Vous voulez trouver une voiture d'occasion. <br /> Nous vous
                facilitons la vie !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
