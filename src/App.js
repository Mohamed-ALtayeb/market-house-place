import React from "react";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
