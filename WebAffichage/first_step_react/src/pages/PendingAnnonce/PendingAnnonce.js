import React, { useEffect, useState } from 'react';
import "./pendingAnnonce.css";
import Pagination from '../../components/Tools/Pagination';
import axios from 'axios';

function PendingAnnonce() {
    const [annonces, setAnnonce] = useState([]);
    const [current, setCurrent] = useState(1);
    const [perPage, setPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // API test
        setAnnonce(response.data);
      }
  
      fetchPosts();
    }, []);

     // Get current page
    const lastIndex = current * perPage;
    const firstIndex = lastIndex - perPage;
    const currentAnnonce = annonces.slice(firstIndex, lastIndex);

    console.log(current);

    // Change page
    const paginate = (pageNumber) => setCurrent(pageNumber);

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
                            {currentAnnonce.map((annonce) => (
                                <tr key={annonce.id}>
                                    <td> {annonce.id} </td>
                                    <td> 10/01/2024 </td>
                                    <td> {annonce.title} </td>
                                    <td> {annonce.body} </td>
                                    <td> {annonce.title} </td>
                                    <td> 50 000 000 AR </td>
                                    <td><a className="detail-link" href="">Voir plus</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Pagination 
                        perPage={perPage}
                        total={annonces.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default PendingAnnonce
