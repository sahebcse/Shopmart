import logo from "./logo.svg";
import {
  Route,
  Link,
  Routes,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Switch } from "react-router";

import Navbar from "./component/Views/Navbar";
import MerchantSignup from "./component/MerchantComponent/MerchantForms/SignupForm";
import MerchantDashBoard from "./component/MerchantComponent/Dashboard/Dashboard";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/merchant/signup" element={<MerchantSignup />} />
          <Route path="/merchant/:id" element={<MerchantDashBoard />} />
          <Route path="/product/:proid" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
