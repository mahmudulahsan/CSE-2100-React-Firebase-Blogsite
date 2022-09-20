import "./App.css";
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Home from './pages/Home'
import SearchPage from './components/SearchPage'
import SingleBlog from './pages/SingleBlog'
import {
  Route, 
  Routes
} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar />   
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/SearchPage" element={<SearchPage/>}></Route>
          <Route path="/blogs" element={<SearchPage/>}></Route>
          <Route path="/blogs/:id" element={<SingleBlog/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;