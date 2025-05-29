import '../../styles/productDescription.css'
import apiClient from '../../services/apiClient';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';


function ProductDetails(){

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const {addToCart} = useCart();

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
      <>
          {
                !loading && !error ?
            <div className='desc-con'>
            
               <div className="holder">
               <div className="box" key={products.id}>
                <img className="product-pic" src={products.images} alt="" />
                <div className='des'>
                    <h3 className='des-title'>{products.name.toUpperCase()}</h3>
                    <p className='description'>{products.description}</p>
                    <h3 className='price'>{"US" + " " + "$"+products.price}</h3>
                    <p className="brand">
                        Brand: {" " + products.brand}
                    </p>
                    <p className="size">
                        Category: {" " + products.category}
                    </p>
                    <p className="colors">
                        Colors: {" " + products.colors}
                    </p>
                    <p className="size">
                        Size: {" " + products.sizes}
                    </p>
                    <div className="quantity">
                        <p>Quantity:</p>
                        <div className="qty-con">
                        <div className="qty">
                          <button>-</button>
                          <div className='num'>1</div>
                          <button>+</button>
                        </div>
                        <p>{products.totalQty + " " + "available products"}</p>
                        </div>
                    </div>
                    <div className="buttons-des">
                      <button>Buy now</button>
                      <button onClick={() => addToCart(products)}>Add to cart</button>
                      <button>Add to wishlist</button>
                    </div>
               </div>
               </div>
            </div>
            
            </div> :
            <div className="preload">
              {loading && 
                <section class="dots-container">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </section>
              }
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          }
      </>
    )
}
export default ProductDetails;