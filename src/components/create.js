import React,{useState, useEffect} from 'react';
import './style/create.css';
import Axios from 'axios';


function Create()  {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productWeight, setProductWeight] = useState("");
    const [productSource, setProductSource] = useState("");
    const [product, setProduct] = useState([]);
    const [newproductprice, setnewproductprice] = useState("");
    const [newproductweight, setnewproductweight] = useState("");
    const [newproductsource, setnewproductsource] = useState("");

    useEffect(() => {
        Axios.get('https://cold-air.herokuapp.com/product').then((res)=>{
            setProduct(res.data)
        });
    }, []);



    const deleteProduct =(productn) => {
        Axios.delete(`https://cold-air.herokuapp.com/delete/${productn}`)
    }

    const updateProduct =(productn) => {
        Axios.put(`https://cold-air.herokuapp.com/update`, {
            product_name:productn,
             product_price:newproductprice,
             product_weight:newproductweight,
             Source:newproductsource
            });
        setnewproductprice("")
        setnewproductweight("")
        setnewproductsource("")
    }

    const submit = () => {
        Axios.post('https://cold-air.herokuapp.com/create', {
            product_name:productName,
             product_price:productPrice,
              product_weight:productWeight,
              Source:productSource
            });
            setProduct([
                ...product,{
                product_name:productName,
                product_price:productPrice,
                 product_weight:productWeight,
                 Source:productSource},
            ]);
    };
        return (
            <div className="create">
                <h2>Create</h2>

                <label>Product name:</label> 
                <input 
                type="text" 
                name="product_name"
                onChange={(e)=> {
                    setProductName(e.target.value);
                }}
                /> <br></br>

                <label>Product price:</label> 
                <input 
                type="number" 
                name="product_price"
                onChange={(e)=> {
                    setProductPrice(e.target.value);
                }}
                /> <br></br>  

                <label>Product weight:</label> 
                <input 
                type="number" 
                name="product_weight"
                onChange={(e)=> {
                    setProductWeight(e.target.value);
                }}
                /> <br></br>

                <label>Product source:</label> 
                <input 
                type="text" 
                name="Source"
                onChange={(e)=> {
                    setProductSource(e.target.value);
                }}
                /> <br></br>

                <button onClick={submit}>Submit</button>





                



                {product.map((val)=>{
                return( 
                <div className='addcard'>
                <h1>
                型號: {val.product_name} <br></br> 
                價錢: ${val.product_price} <br></br> 
                重量: {val.product_weight} kg <br></br> 
                Source: {val.productSource}
                
                </h1>
                
                    update product price: <input type="text" id="updateinput" 
                    onChange={(e) => {setnewproductprice(e.target.value)}}
                    
                    />
                    <br></br>
                    update product weight: <input type="text" name="weight"
                    onChange={(e) => {setnewproductweight(e.target.value)}}
                    />

                    update product source: <input type="text" name="source"
                    onChange={(e) => {setnewproductsource(e.target.value)}}
                    />

                    <button onClick={()=> {updateProduct(val.product_name)}}>Update</button>
                    <br></br>
                    
                    <button onClick={()=> {deleteProduct(val.product_name)}}>Delete</button>
                </div>
                    )})}


            </div>
        )
    }

export default Create;