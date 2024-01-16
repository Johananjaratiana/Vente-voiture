import React from 'react';
import "./userProfile.css";
import face from "../../assets/images/face1.jpg";

function UserProfile() {
  return (
   <>
    <div className="container user-profile-div mx-auto mt-4 mb-4">
            <div className="card col-md-10 mx-auto stat-section">
                <h4 className="card-title">Profile de l'utilisateur</h4>
                <div className="nav-section d-flex align-items-center mt-4">
                    <a href="" className="nav-item active">PROFILE</a>
                    <a href="" className="nav-item">ANNONCES</a>
                    <div className="nav-item empty">Empty</div>
                </div>

                <div className="user-profile row mt-5">
                    <div className="col-md-4 d-flex justify-content-center align-items-start">
                        <img src={face} alt=""/>
                    </div>
                    <div className="col-md-7 ps-5">
                        <div className="input-group">
                            <div className="title">
                                NOM
                            </div>
                            <div className="value">
                                MAMIARILAZA
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="title">
                                PRENOM
                            </div>
                            <div className="value">
                                To Niasimandimby
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="title">
                                EMAIL
                            </div>
                            <div className="value">
                                mamiarilaza.to@gmail.com
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="title">
                                TELEPHONE
                            </div>
                            <div className="value">
                                +261 34 25 234 13
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="title">
                                ADDRESSE
                            </div>
                            <div className="value">
                                Andoharanofotsy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default UserProfile