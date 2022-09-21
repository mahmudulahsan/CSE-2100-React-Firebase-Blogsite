import './Author.css'
import data from '../Fetch Blogs/data'
import { Link } from 'react-router-dom'

const Author = () => {
  const set = new Set();
  
  data.map((val) => {
    set.add(val.author)
  })

  const arr = new Array(...set);

  return (
    <div className="container">
      <h3 className='text-center mt-4'>লেখক</h3>
      <hr />
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column'>
        {arr.map((val, key)=>(
          <Link className="text-center author m-2"  key={key} to={`/blogs/author/${val}`}>{val}</Link>
        ))}
      </div>
      </div>     
    </div>

    
  )
}

export default Author