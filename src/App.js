import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contactus from "./pages/Contactus";
import FAQs from "./pages/FAQs";
import MyAccount from "./pages/MyAccount";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import Requestforspecimen from "./pages/Requestforspecimen";
import Trackyourorder from "./pages/Trackyourorder";
import Connectus from "./pages/Connectus";
import Team from "./pages/Team";
import Career from "./pages/Career";
import Catalogue from "./pages/Catalogue";
import Privacypolicy from "./pages/Privacypolicy";
import Shipping from "./pages/Shipping";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Requestforspecimen" element={<Requestforspecimen />} />
          <Route path="/Trackyourorder" element={<Trackyourorder />} />
          <Route path="/Connectus" element={<Connectus />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Shipping" element={<Shipping />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
