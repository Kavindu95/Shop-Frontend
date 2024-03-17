import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainLayout({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-danger">
          <div className="d-flex justify-content-start m-3">
            <Link
              to="/pos"
              className="navbar-brand"
              style={{
                fontSize: "2rem",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Hot Dragon Shop
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="mt-3 m-5">{children}</div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default MainLayout;
