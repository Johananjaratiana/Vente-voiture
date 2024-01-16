import React from 'react';
import "./pendingAnnonce.css";

function PendingAnnonce() {
  
    return (
    <>
        <div className="container pending-annonces mx-auto mt-4">
            <div className="card stat-section">
                <div className="row px-3">
                    <h4 className="card-title">Annonces en attentes de valiation</h4>
                    <h4 className="card-description">Ces annonces ne sont pas encore vue publiquement</h4>
                    <table className="table mt-3 pending-list">
                        <thead>
                            <tr className="table-dark">
                                <th>ID</th>
                                <th>Date</th>
                                <th>Voiture</th>
                                <th>Description</th>
                                <th>Proprietaire</th>
                                <th>Prix</th>
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
                                <td>To MAMIARILAZA</td>
                                <td className="prix">30 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>15/01/2024</td>
                                <td>Ford Mustang</td>
                                <td>Une voiture sportive élégante avec une puissance exceptionnelle.</td>
                                <td>John Doe</td>
                                <td className="prix">50 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>20/01/2024</td>
                                <td>Honda Civic</td>
                                <td>Une voiture compacte et économique, idéale pour la conduite en ville.</td>
                                <td>Jane Smith</td>
                                <td className="prix">25 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>25/01/2024</td>
                                <td>Mercedes-Benz S-Class</td>
                                <td>Le summum du luxe et de la sophistication.</td>
                                <td>Michael Johnson</td>
                                <td className="prix">100 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>01/02/2024</td>
                                <td>Chevrolet Tahoe</td>
                                <td>Un SUV spacieux et polyvalent, parfait pour les familles nombreuses.</td>
                                <td>Lisa Williams</td>
                                <td className="prix">40 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>15/01/2024</td>
                                <td>Ford Mustang</td>
                                <td>Une voiture sportive élégante avec une puissance exceptionnelle.</td>
                                <td>John Doe</td>
                                <td className="prix">50 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>20/01/2024</td>
                                <td>Honda Civic</td>
                                <td>Une voiture compacte et économique, idéale pour la conduite en ville.</td>
                                <td>Jane Smith</td>
                                <td className="prix">25 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>25/01/2024</td>
                                <td>Mercedes-Benz S-Class</td>
                                <td>Le summum du luxe et de la sophistication.</td>
                                <td>Michael Johnson</td>
                                <td className="prix">100 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>01/02/2024</td>
                                <td>Chevrolet Tahoe</td>
                                <td>Un SUV spacieux et polyvalent, parfait pour les familles nombreuses.</td>
                                <td>Lisa Williams</td>
                                <td className="prix">40 000 000 AR</td>
                                <td><a className="detail-link" href="">Voir plus</a></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="pagination">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PendingAnnonce