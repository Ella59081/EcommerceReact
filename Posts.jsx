import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const baseURL = import.meta.env.VITE_API_BASE_URL;

        const response = await axios.get(`${baseURL}/products`);

        setPosts(response.data);
      } catch (err) {
        console.log(err);

        setError("Failed to fetch users. Please try again." + err.message);
      } finally {
        // Set loading to false after fetching
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Post List</h2>

      {loading && <p>Loading posts...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div>
          {/* // border="1"
          // cellPadding="10"
          // style={{ width: "100%", borderCollapse: "collapse" }}>
          // <thead>
          //   <tr>
          //     <th>ID</th>
          //     <th>Title</th>
          //     <th>Body</th>
          //   </tr>
          // </thead>
          // <tbody> */}
            {posts.map((post) => (
              <a className='products' href="" key={post.id}>
              <div className='product'>
              <h1>{post.id}</h1>
              <p>{post.title}</p>
              
              </div>
            </a>
            ))}
          {/* </tbody> */}
        </div>
      )}
    </div>
  );
};

export default Posts;