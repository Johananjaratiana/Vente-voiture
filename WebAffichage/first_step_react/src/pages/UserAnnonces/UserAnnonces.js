import React from 'react'
import "./userAnnonce.css"

function UserAnnonces() {
  return (
    <>
        <div className="container user-annonce-div mx-auto mt-4 mb-4">
            <div className="card col-md-10 mx-auto stat-section">
                <h4 className="card-title">Profile de l'utilisateur</h4>
                <div className="nav-section d-flex align-items-center mt-4">
                    <a href="" className="nav-item">PROFILE</a>
                    <a href="" className="nav-item active">ANNONCES</a>
                    <div className="nav-item empty">Empty</div>
                </div>

                <div className="annonce-histories mt-4">
                    <h4>Historiques des annonce effectue</h4>
                    <table className="table mt-3 pending-list">
                        <thead>
                            <tr className="table-dark">
                                <th>ID</th>
                                <th>Date</th>
                                <th>Voiture</th>
                                <th>Description</th>
                                <th className="prix">Prix</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>10/01/2024</td>
                                <td>Toyota Hilux</td>
                                <td>Un très belle voiture pour vous et votre famille, c'est un Toyota Hilux de troisième
                                    génération plus belle !</td>
                                <td className="prix">30 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>15/01/2024</td>
                                <td>Ford Mustang</td>
                                <td>Une voiture sportive élégante avec une puissance exceptionnelle.</td>
                                <td className="prix">50 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>20/01/2024</td>
                                <td>Honda Civic</td>
                                <td>Une voiture compacte et économique, idéale pour la conduite en ville.</td>
                                <td className="prix">25 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>25/01/2024</td>
                                <td>Mercedes-Benz S-Class</td>
                                <td>Le summum du luxe et de la sophistication.</td>
                                <td className="prix">100 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>01/02/2024</td>
                                <td>Chevrolet Tahoe</td>
                                <td>Un SUV spacieux et polyvalent, parfait pour les familles nombreuses.</td>
                                <td className="prix">40 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>15/01/2024</td>
                                <td>Ford Mustang</td>
                                <td>Une voiture sportive élégante avec une puissance exceptionnelle.</td>
                                <td className="prix">50 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserAnnonces