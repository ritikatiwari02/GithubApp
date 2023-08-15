import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";



//components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

 
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;





