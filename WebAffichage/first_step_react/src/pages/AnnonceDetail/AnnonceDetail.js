import React from 'react'
import "./ficheAnnonce.css"

import car1 from "../../assets/images/car/car1.jpg";
import car2 from "../../assets/images/car/car2.jpg";
import car3 from "../../assets/images/car/car3.jpg";

function AnnonceDetail() {
  return (
    <>
        <div className="fiche-container">
            <div className="detail pt-5 px-3">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="true"
                                aria-controls="flush-collapseOne">
                                CATEGORIE
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Energie
                                        </div>
                                        <div className="detail-content">
                                            Essence
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Transmission
                                        </div>
                                        <div className="detail-content">
                                            Automatique
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Couleur
                                        </div>
                                        <div className="detail-content">
                                            Rouge
                                        </div>
                                    </div>

                                    {/* <!-- SECOND SECTION --> */}
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Taille
                                        </div>
                                        <div className="detail-content">
                                            Camions
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Usage
                                        </div>
                                        <div className="detail-content">
                                            Tranport
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Carrosserie
                                        </div>
                                        <div className="detail-content">
                                            Cabriolet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne2" aria-expanded="false"
                                aria-controls="flush-collapseOne2">
                                DETAILS
                            </button>
                        </h2>
                        <div id="flush-collapseOne2" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Consommation
                                        </div>
                                        <div className="detail-content">
                                            6 L / 100
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Km effectue
                                        </div>
                                        <div className="detail-content">
                                            12 000 Km
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Place
                                        </div>
                                        <div className="detail-content">
                                            6
                                        </div>
                                    </div>

                                    {/* <!-- THIRD SECTION --> */}
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Vitesse
                                        </div>
                                        <div className="detail-content">
                                            5
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Puissance
                                        </div>
                                        <div className="detail-content">
                                            80 Ch
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="detail-title">
                                            Type de moteur
                                        </div>
                                        <div className="detail-content">
                                            CDI
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne3" aria-expanded="false"
                                aria-controls="flush-collapseOne3">
                                ETATS DES PIECES
                            </button>
                        </h2>
                        <div id="flush-collapseOne3" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body pt-3">
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Moteur
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '25%' }}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Freinage
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '70%' }}
                                                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Transmission
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '50%' }}
                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Pneu
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '90%' }}
                                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Electronique
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '30%' }}
                                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center mb-3">
                                    <div className="col-md-4 piece">
                                        Suspension
                                    </div>
                                    <div className="col-md-8 etat">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: '68%' }}
                                                aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">68%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description p-5">
                <h4 className="marque">Toyota Hilux</h4>

                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="model">MODELS</h4>
                    <h4 className="price">30 000 000 AR</h4>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="version">version 1.0</h4>
                    <h4 className="numero">1923 TNR</h4>
                </div>

                <div className="photo-gallery mt-4 px-4">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={car1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={car2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={car3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        
                        <div className="controller d-flex justify-content-between align-items-center">
                            <div className="prev-button">
                                <button type="button" className="custom-action-button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon prev-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="custom-indicator carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" aria-current="true" data-bs-slide-to="0" className="custom-indicator-button active"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="custom-indicator-button"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="custom-indicator-button"></button>
                            </div>
                            <div className="next-button">
                                <button type="button" className="custom-action-button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="desc mt-5 row">
                    <div className="col-md-7">
                        <h4 className="card-title">DESCRIPTION</h4>
                        <hr/>
                        <p className="text">
                            Un SUV spacieux et polyvalent, parfait pour les familles nombreuses.
                            Ideal pour les vacances en famille sur les bonnes routes. L'etat de la voiture est presque parfaite.
                        </p>
                        <button className="red-button">Voir le proprietaire</button>
                    </div>
                    <div className="col-md-5">
                        <h4 className="card-title">VALIDATION</h4>
                        <hr/>
                        <button className="btn btn-success validate-button me-4">
                            <i className="fas fa-check me-2"></i>
                            Valider
                        </button>
                        <button className="btn btn-danger">
                            <i className="fas fa-times me-2"></i>
                            Refuser
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default AnnonceDetail