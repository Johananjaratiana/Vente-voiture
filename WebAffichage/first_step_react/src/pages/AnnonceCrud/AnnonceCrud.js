import React from 'react';
import "./crudAnnonce.css";

function AnnonceCrud() {
  return (
    <>
           {/* <!-- MODAL FOR INSERTION --> */}

            <div className="modal fade crud-annonce-div" id="insertionModal" tabIndex="-1" aria-labelledby="insertionModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="insertionModalLabel">Nouvelle type d'annonce</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-group mb-3">
                                    <label for="" className="form-label">Type d'annonce</label>
                                    <input type="text" className="form-control custom-input" name="typeAnnonce" placeholder="Nom du type d'annonce"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="" className="form-label">Commission</label>
                                    <input type="number" className="form-control custom-input" name="commission" placeholder="Commission"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="red-button cancel-button" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="red-button">Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- MODAL FOR UPDATE --> */}

            <div className="modal fade crud-annonce-div" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLabel">Modifier une annonce</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-group mb-3">
                                    <label for="" className="form-label">ID</label>
                                    <input type="text" className="form-control custom-input" name="idTypeAnnonce" value="2" readonly/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="" className="form-label">Type d'annonce</label>
                                    <input type="text" className="form-control custom-input" name="typeAnnonce" value="Annonce simple"/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="" className="form-label">Commission</label>
                                    <input type="number" className="form-control custom-input" name="commission" value="5"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="red-button cancel-button" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="red-button">Modifier</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container crud-annonce-div mx-auto mt-4">
                <div className="col-md-10 mx-auto">
                    <div className="card stat-section">
                        <div className="row px-3">
                            <h4 className="card-title">Gestion des types d'annonces</h4>
                            <div className="mt-3 p-0">
                                <button className="red-button" data-bs-toggle="modal" data-bs-target="#insertionModal">Nouvelle type d'annonce</button>
                            </div>
                            <table className="table mt-3 pending-list">
                                <thead>
                                    <tr className="table-dark">
                                        <th>ID</th>
                                        <th>Type d'annonce</th>
                                        <th>Commission</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Annonce simple</td>
                                        <td>2 %</td>
                                        <td>
                                            <a className="detail-link" href="" data-bs-toggle="modal" data-bs-target="#updateModal"><i className="fas fa-edit mx-3"></i></a>
                                            <a className="detail-link" href=""><i className="fas fa-trash mx-3"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Annonce sponsorise</td>
                                        <td>5 %</td>
                                        <td>
                                            <a className="detail-link" href="" data-bs-toggle="modal" data-bs-target="#updateModal"><i className="fas fa-edit mx-3"></i></a>
                                            <a className="detail-link" href=""><i className="fas fa-trash mx-3"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>   
    </>
  )
}

export default AnnonceCrud