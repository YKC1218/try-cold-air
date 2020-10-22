import React from 'react'

const Pagination = ({productsPerPage, totalProducts, paginate, currentPage}) => {
    const pageNumbers=[];
    for(let i=1; i<= Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i)
    }


    
    return (
            
        <div>
           <ul className="pagination pagination justify-content-center">
               
               {pageNumbers.map(number=>(
                    
                   <li key={number} className={ number===currentPage ? 'page-item active' : ''}>
                       <a onClick={()=> paginate(number)}  className="page-link">
                           {number}
                       </a>

                   </li>
               ))}
           </ul>
        </div>
    )
}
export default Pagination