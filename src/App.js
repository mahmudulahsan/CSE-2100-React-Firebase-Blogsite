import "./App.css";
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Blogs from './components/Blogs'
import SingleBlog from './pages/SingleBlog'
import Notfound from "./components/Notfound";
import {
  Route, 
  Routes,
} from 'react-router-dom'
import SingleCategory from "./pages/SingleCategory";

function App() {
  
  return (
    <>
      <Navbar />   
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/blogs/:id" element={<SingleBlog/>}></Route>
          <Route path="/blogs/category" element={<Home/>}></Route>
          <Route path="/blogs/category/:catId" element={<SingleCategory/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
