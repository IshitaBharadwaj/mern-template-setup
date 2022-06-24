import Login from "./components/Login";
import Test from "./components/Test";
import Register from "./components/Register";
import LandingPage from "./LandingPage";
import logo from "./logo.svg";
import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="">
              MyApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      
                <li className="nav-item ">
                  <Link className="nav-link active" to="Test">
                    Test
                  </Link>
                </li>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="Login">
                      Login
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="Register">
                      Register
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
