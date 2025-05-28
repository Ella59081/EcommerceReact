import '../../styles/categories.css'
import apiClient from '../../services/apiClient';
import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';

function GetCategory(){

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
            const fetchProducts = async () => {
              try {
                const response = await apiClient.get(`/categories/${id}`)
        
                setProducts(response.data.isCategoryFound.products);
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
          }, [id]);

    return(
        <div className="products">
                    <h1>All products</h1>
        
                        {loading && <p>Loading products...</p>}
        
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="grid-con">
                    {
                        // console.log(products.products)
                        
                    products.map((product) =>(
                    <div key={product.id}>
                        <div className="item">
                            <img src={product.images} alt="" />
                            <Link to={`/products`} href='' className='name'>{
                                product.name
                            }</Link>
                            <p>{"$" + product.price}</p>
                            <p>{product.category}</p>
                            <p className='rate'>{product.totalReviews + " " + "/" + " " + "5"}
                              <span>
                                <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"  ><g transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star" ><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star" ><g transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                                <svg height="13" version="1.1" viewBox="0 0 13 13" width="13" aria-label="star"><g  transform="translate(-90.000000, -3261.000000)"><polygon id="Star-Copy-17" points="97 3271.77933 92.6737621 3274 93.5 3269.29656 90 3265.96556 94.836881 3265.27933 97 3261 99.163119 3265.27933 104 3265.96556 100.5 3269.29656 101.326238 3274"></polygon></g></svg>
                              </span>
                            </p>
                            <div className="buttons">
                               <button>Buy now</button>
                               <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                    </div>
                    </div>
    )
}
export default GetCategory;