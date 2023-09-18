import Signup from './Signup.jsx'
import Appbar from './Appbar'
import Signin from './Signin'
import AddCourse from './AddCourse.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 

  return (
    <>
    <div style= {{width: "100vw", 
                 height: "100vh", 
                 background: "#eeeeee" }}>
                 
   
    <Router>
    <Appbar></Appbar>
        <Routes>
            <Route path="/addcourse" element = {<AddCourse/>} /> // http://localhost:5173/addcourse
            <Route path = "/Signup" element = {<Signup/>} /> // http://localhost:5173/Signup
            <Route path = "/Signin" element = {<Signin/>} />  // http://localhost:5173/signin
        </Routes>
    </Router>
    </div>
    </>
  )
}
export default App
