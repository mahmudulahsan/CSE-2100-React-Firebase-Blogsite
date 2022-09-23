import './Category.css'
import data from '../Fetch Blogs/data'
import { Link } from 'react-router-dom'

const Category = () => {
  const set = new Set();
  
  data.map((val) => {
    set.add(val.category)
  })

  const arr = new Array(...set);

  return (
    <div className="container">
      <h3 className='text-center mt-4'><i class="fa-solid fa-sitemap"/> ক্যাটাগরি</h3>
      <hr />
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column'>
        {arr.map((val, key)=>(
          <Link className="text-center category m-2"  key={key} to={`/blogs/category/${val}`}>{val}</Link>
        ))}
      </div>
      </div>     
    </div>

    
  )
}

export default Category