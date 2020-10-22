import Axios from 'axios';
import React,{useState, useEffect} from 'react';

import './style/product.css';

import Products from './showproduct'
import Pagination from './Pagination'

function Product()  {

    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [productPerPage] = useState(8);


        //拎backend既route
    Axios.get('https://try-cold-air.herokuapp.com/product').then((res) => {
        setProduct(res.data)
    });


    useEffect(()=>{
        Axios.get('https://try-cold-air.herokuapp.com/product').then((res)=>{
            setProduct(res.data);
        })
    },[])

    //get current number of products(好似係 get current posts https://www.youtube.com/watch?v=IYCa1F-OWmk&ab_channel=TraversyMedia  )
    const indexOfLastProduct= currentPage * productPerPage;
    const indexofFirstProduct= indexOfLastProduct - productPerPage;
    const currentProducts = product.slice(indexofFirstProduct, indexOfLastProduct)


    //Change page
        const paginate= (pageNumber) => setCurrentPage(pageNumber)
        
        return(
            
            <div className="text-center">
                <Products products={currentProducts}/>  
                <Pagination 
                productsPerPage={productPerPage} 
                totalProducts={product.length} 
                paginate={paginate}
                currentPage={currentPage}
                />             
            </div>
            );
}


export default Product;
