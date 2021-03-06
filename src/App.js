import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import NotAvailable from "./Pages/Shared/NotAvailable";
import Blogs from "./Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./Pages/ProductDetail/PoductDetail";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import Payment from "./Pages/Dashboard/Payment";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>

        {/* dashboard */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>

          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageproduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrder></ManageOrder>
              </RequireAdmin>
            }
          ></Route>

          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>

        <Route path="*" element={<NotAvailable></NotAvailable>}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
