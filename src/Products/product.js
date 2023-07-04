import React, {useState, useEffect} from "react";


const Products =()=>{
    const [products,setProducts]= useState([]);
    const [loading, setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()

    }, [])

    const getProducts= async()=>{
        try{
            setLoading(true)
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json();
            setProducts(result.products)
            setLoading(false);
        }
        catch(error){
            console.log(error.message)
        }
    };

        if(loading){
            return <h2>Loading...</h2>
    }
    return(
        <div>
            <h1>All Products</h1>
            {products.map(item =>(
                <h2>{item.title}</h2>
            ))}
        </div>
    )
}
export default Products







