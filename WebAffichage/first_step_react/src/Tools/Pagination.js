import React from 'react'

const Pagination = ({ perPage, total, paginate}) => {

    const pageNnumber = [];

    for (let i = 1; i <= Math.ceil(total / perPage); i++){
        pageNnumber.push(i);
    }

  return (
    <div className='pagination'>
        <ul className="pagination">
            { pageNnumber.map(number => (
                <li key={number} className="page-item">
                    <a href="#" className='page-link' onClick= {(e) => {
                            e.preventDefault();
                            paginate(number);
                        }}> {number} </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination