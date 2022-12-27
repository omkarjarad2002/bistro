import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Signup from "./components/Signup";
import AddRestuarant from "./components/AddRestaurant";
import { Route, Routes } from "react-router-dom";
import Fooditems from "./components/Fooditems";
import Totalinfo from "./components/Totalinfo";
import Logout from "./components/Logout";
import Cart from "./components/Cart";
// import TestModal from './components/TestModal';
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./state/reducers/UseReducer";
import AdminDashboard from "./components/AdminDashboard";
import Restaurantdashboard from "./components/Restaurantdashboard";
import Restaurantproduct from "./components/Restaurantproduct";
import UpdateProduct from "./components/UpdateProduct";
import Footer from "./components/Footer";
import Orderdashboard from "./components/Orderdashboard";
import OrderHistory from "./components/OrderHistory";
import UserDetails from "./components/UserDetails";
import UserOrderHistory from "./components/UserOrderHistory";
import Spinner from "./components/Spinner";
import UserOrederDetails from "./components/UserOrederDetails";
import OrderHistory__next from "./components/OrderHistory__next";
import EditProfile from "./components/EditProfile";
import SendOtp from "./components/SendOtp";
import ResetPassword from "./components/ResetPassword";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />{" "}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Signup />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/fooditems"
            element={
              <>
                <Navbar />
                <Fooditems />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/addrestuarant"
            element={
              <>
                <Navbar />
                <AddRestuarant />
                <Footer />
              </>
            }
          />
          <Route
            path="/totalinfo/:id"
            element={
              <>
                <Navbar />
                <Totalinfo />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/logout"
            element={
              <>
                <Navbar />
                <Logout />
              </>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <>
                <Navbar />
                <AdminDashboard />
              </>
            }
          />
          <Route
            path="/restaurantdashboard/:id"
            element={
              <>
                <Navbar />
                <Restaurantdashboard />
              </>
            }
          />
          <Route
            path="/restaurantproducts/:id"
            element={
              <>
                <Navbar />
                <Restaurantproduct />
              </>
            }
          />
          <Route
            path="/updateproduct/:id"
            element={
              <>
                <Navbar />
                <UpdateProduct />
              </>
            }
          />
          <Route
            path="/orderdashboard"
            element={
              <>
                <Navbar />
                <Orderdashboard />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/orderHistory/:id"
            element={
              <>
                <Navbar />
                <OrderHistory />{" "}
              </>
            }
          />
          <Route
            path="/orderHistory__next/:id"
            element={
              <>
                <Navbar />
                <OrderHistory__next />{" "}
              </>
            }
          />
          <Route
            path="/getUsersDetails"
            element={
              <>
                <Navbar />
                <UserDetails />{" "}
              </>
            }
          />
          <Route
            path="/UserOrderHistory/:id"
            element={
              <>
                <Navbar />
                <UserOrderHistory />{" "}
              </>
            }
          />
          <Route
            path="/spinner"
            element={
              <>
                <Navbar />
                <Spinner />{" "}
              </>
            }
          />
          <Route
            path="/userOrederDetails/:id"
            element={
              <>
                <Navbar />
                <UserOrederDetails />{" "}
              </>
            }
          />
          <Route
            path="/editProfile/:id"
            element={
              <>
                <Navbar />
                <EditProfile />{" "}
              </>
            }
          />
          <Route
            path="/sendotp"
            element={
              <>
                <Navbar />
                <SendOtp />{" "}
              </>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <>
                <Navbar />
                <ResetPassword />{" "}
              </>
            }
          />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
