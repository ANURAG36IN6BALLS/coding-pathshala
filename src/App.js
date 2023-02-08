import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Contactus from './pages/Contactus';
import FAQ from './pages/FAQ';
import MyAccount from './pages/MyAccount'
import Forgotpassword from './pages/Forgotpassword';
import Header from './components/Header';


function App() {
  return (

    <>
     
      <Router>
            <Header />
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
                <Route path="/Contactus" element={<Contactus/>}/>
                <Route path="/FAQ" element={<FAQ/>}/>
                <Route path="/MyAccount" element={<MyAccount/>}/>

            </Routes>

      </Router>


    
    </>
  );
}

export default App;
