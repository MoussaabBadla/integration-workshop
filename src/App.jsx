import { useEffect , useState } from 'react'
import './App.css'
import Post from './Post'
function App() {


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState(null)
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      });
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);

    } catch (error) {
      setError(error.message)
      setLoading(false);

    }
  }


  useEffect(() => {
    fetchPosts()
  }
  ,[])


  return (
    <>
    <div className='post-list-container'>
      <div className='post-list-title' >Posts</div>
      <div className='posts'>
        {loading && <div>Loading...</div>
        }
        {error && <div>{error}</div>}
        {
          posts.map(post => <Post key={post.id}  post={post} />)
        }


      </div>


    </div>
    </>
  )

  }

export default App
