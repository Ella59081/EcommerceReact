import '../../styles/categories.css'
import apiClient from '../../services/apiClient';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function ProductDetails(){

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
            const fetchProducts = async () => {
              try {
                const response = await apiClient.get(`/products/${id}`)
        
                setProducts(response.data.productFound);
                console.log(products);
              } catch (err) {
                console.log(err);
        
                setError("Failed to fetch product. Please try again, " + err.message);
              } finally {
                // Set loading to false after fetching
                setLoading(false);
                
                console.log("ready")
    
              }
            };
        
            fetchProducts();
          }, [id]);

    return(
        <div className='desc-con'>
            {loading && <p>Loading product...</p>}
    
            {error && <p style={{ color: "red" }}>{error}</p>}
            {
                !loading && !error ?
               <div className="holder">
               <div className="box" key={products.id}>
                <img className="product-pic" src={products.images} alt="" />
                <div className='des'>
                    <h3 className='des-title'>{products.name.toUpperCase()}</h3>
                    <p>{products.description}</p>
                    <h3 className='price'>{"US" + " " + "$"+products.price}</h3>
                    <p className="brand">
                        Brand: {" " + products.brand}
                    </p>
                    <p className="size">
                        Category: {" " + products.cartegory}
                    </p>
                    <p className="colors">
                        Colors: {" " + products.colors}
                    </p>
                    <p className="size">
                        Size: {" " + products.size}
                    </p>
                    <p className="quantity">
                        Quantity:
                        {products.quantity + "available products"}
                    </p>
                    <div className="buttons-des">
                      <button>Buy now</button>
                      <button>Add to cart</button>
                      <button>Add to wishlist</button>
                    </div>
               </div>
               </div>
            </div>
            : ""
            }
        </div>
    )
}
export default ProductDetails;