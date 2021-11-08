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
import Product from "./component/Product/Product";
import Cart from "./component/Shop/Cart";
import Checkout from "./component/Checkout/Checkout";
import HomePage from "./component/Views/HomePage";
import { loadAllProducts } from "./action/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StoreView from "./component/Store/StoreView";
import SearchResults from "./component/Views/SearchResults";
import CategoryResults from "./component/Views/CategoryResults";
import UserLogin from "./component/Forms/UserLogin";
import Stores from "./component/Store/Stores";

import Referral from "./component/Views/Referral";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51J8GAsSH4Sh8XwNi3Gw7LEGc44TQTY63b8VdJP4D3fHL30bpHIJKlhL7BKcxex80KPwDZg08Adywy5WTeKLZbngP00FQwvXLWv"
);

import { loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const promise = loadStripe("pk_test_51J8GAsSH4Sh8XwNi3Gw7LEGc44TQTY63b8VdJP4D3fHL30bpHIJKlhL7BKcxex80KPwDZg08Adywy5WTeKLZbngP00FQwvXLWv")

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllProducts());
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/merchant/signup" element={<MerchantSignup />} />
          <Route path="/merchant/:id" element={<MerchantDashBoard />} />
          <Route path="/signIn" element={<UserLogin />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/checkout"
            element={
              <Elements stripe={promise}>
                <Checkout />
              </Elements>
            }
          />

          <Route path="/checkout" element={<Elements stripe={promise}><Checkout /></Elements>} />

          <Route path="/store/:id" element={<StoreView />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/category" element={<CategoryResults />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/referral" element={<Referral />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
