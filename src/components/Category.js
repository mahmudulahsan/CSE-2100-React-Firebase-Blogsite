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
    <div className='container-fluid'>
      <h2 className='text-center mt-5' style={{paddingTop:"80px"}}>Categories</h2>
      <div className='row m-5'>
      {arr.map((val, key)=>(
          
          <div key={key} className="col-md-3 text-center"><Link className='category' to={`/blogs/category/${val}`}>{val}</Link></div>
          
      ))}
    </div>
    </div>
    
  )
}

export default Category