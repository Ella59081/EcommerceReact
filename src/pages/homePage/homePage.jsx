import {Link} from "react-router-dom"
import '../../styles/home.css'
import apiClient from "../../services/apiClient"
import { useState, useEffect } from "react";
import { useCart } from '../../contexts/CartContext'
function Homepage(){


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [isliked, setIsLiked] = useState(
      false
      // '/src/assets/images/heart-solid (7).svg'

    )

    const likeProduct = () =>{
      setIsLiked(true)
    }

    const {addToCart} = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await apiClient.get("/products")
    
            setProducts(response.data.products);
            console.log(products);
          } catch (err) {
            console.log(err);
    
            setError("Failed to fetch products. Please try again, " + err.message);
          } finally {
            // Set loading to false after fetching
            setLoading(false);
            
            console.log("ready")

          }
        };
    
        fetchProducts();
      }, []);
    //   let productList = products.products || []


    return(
        <>
        <div className="con">
            <div className="first">
                <div className="info">
                   <h1>Welcome to Shopify</h1>
                   <p>For your everyday shopping</p>
                   <div className="buttons-route">
                        <Link className="white" to="/register">SHOP NOW</Link>
                        <Link className="black" to="/register">REGISTER</Link>
                    </div>
                </div>
            </div>
            <div className="categories-section">
                <h1 className="topic">EXPLORE CATEGORIES</h1>
                <div className="cat-grid">
                  <div className="cat-item">
                    <a href="">
                      <img src='/src/assets/images/men.jpg' alt="" />
                    </a>
                    <a className="shop" href="">SHOP FOR MEN</a>
                  </div>
                  <div className="cat-item">
                    <a href="">
                      <img src="/src/assets/images/women.jpg" alt="" />
                    </a>
                    <a className="shop" href="">SHOP FOR WOMEN</a>
                  </div>
                  <div className="cat-item">
                    <a href="">
                      <img src="/src/assets/images/swimmers.avif" alt="" />
                    </a>
                    <a className="shop" href="">SHOP FOR SWIMMERS</a>
                  </div>
                </div>
            </div>
            <div className="onsale-con">
              <div className="onsale">
                <div className="sale">
                  <h3>Different shoes</h3>
                  <h1>Just for you</h1>
                  <a href="" className="buy">Shop now</a>
                </div>
              </div>
            </div>
            <div className="products">
            <div className="topic-header">
               <h1 className="topic">Featured products</h1>
               <Link to="/products">VIEW ALL PRODUCTS</Link>
            </div>

                {loading && <p>Loading products...</p>}

                {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="grid-con">
            {
                 
                products.slice(4, 12).map((product) =>(
                            <div  key={product.id}>
                                <div className="item">
                                      {/* <button onClick={likeProduct} className="like">
                                        {
                                          isliked ?
                                            <img className='liking' src="/src/assets/images/heart-solid (7).svg" alt="" />
                                           : <img className='liking' src="/src/assets/images/heart-solid (7).svg" alt="" />
                                           
                                        }
                                      </button> */}
                                    <Link to={`/products/${product.id}`}
                                      
                                      className="namelink" href="">
                                        
                                      <img className="prodImg" src={product.images} alt="" />
                                    </Link>
                                    <Link to={`/products/${product.id}`} className='name'>{
                                        product.name
                                    }</Link>
                                    <p className='price'>{"$" + product.price}</p>
                                    <p>{product.brand}</p>
                                    {/* <p className='rate'>{product.totalReviews + " " + "/" + " " + "5"}
                                      <span>
                                        <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"  ><g transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                        <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star" ><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                        <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                        <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star" ><g transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                        <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                      </span>
                                    </p> */}
                                    <div className="buttons-add">
                                       {/* <button>Buy now</button> */}
                                       <button 
                                       onClick={ () => addToCart(product)}
                                       >
                                        Add to cart
                                       </button>
                                    </div>
                                </div>
                            </div>
                            ))
                
               
           }
            </div>
            </div>
        </div>
        </>
    )
}

export default Homepage