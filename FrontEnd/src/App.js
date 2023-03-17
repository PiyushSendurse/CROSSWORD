import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from "./components/Products";
import ProfileEditInfo from "./components/ProfileEditInfo";
import ProfileCourses from "./components/ProfileCourses";
import ProfileSettings from "./components/ProfileSettings";
import SendPassword from "./components/SendPassword";
import ForgotPassword from "./components/ForgotPassword";
import AdminCategory from "./components/AdminCategory";
import AddCategory from "./components/AddCategory";
import UpdateCategory from "./components/UpdateCategory copy";
import LoginFailed from "./components/LoginFailed";
import CustomerLoginFailed from "./components/CustomerLoginFailed";

import Header from './components/Header';
import Footer from './components/Footer';
import Customer from "./components/Customer";
import CustomerLogin from "./components/CustomerLogin";
import ProductBookSuccessfully from "./components/ProductBookSuccessfully";
import AdminLogin from "./components/AdminLogin";
import AdminProduct from "./components/AdminProduct";
import AddProduct from "./components/AddProduct";
import CustomerProduct from "./components/CustomerProduct";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/profile" element={<ProfileEditInfo />} />
        <Route exact path="/profile/courses" element={<ProfileCourses />} />
        <Route exact path="/profile/settings" element={<ProfileSettings />} />
        
        <Route exact path="/sendPassword" element={<SendPassword />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/admincategory" element={<AdminCategory />} />
        <Route exact path="/addCategory" element={<AddCategory />} />
        <Route exact path="/updateCategory" element={<UpdateCategory />} />
        <Route exact path="/loginFailed" element={<LoginFailed />} />
        <Route exact path="/customerloginFailed" element={<CustomerLoginFailed />} />
        <Route exact path="/customerlogin" element={<CustomerLogin />} />
        
        <Route exact path="/customer" element={<Customer />} />
        
        <Route exact path="/productbooksuccessfully" element={<ProductBookSuccessfully />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/adminproduct" element={<AdminProduct />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/customerproduct" element={<CustomerProduct />} />
        


      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;