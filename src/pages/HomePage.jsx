import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3" style={{ color: "black" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Welcome to the Hot Dragon Shop
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.5",
          }}
        >
          Indulge in a culinary journey like no other at Hot Dragon Shop.
          Discover exquisite flavors, handcrafted with passion and expertise.
          Whether you're craving a comforting classic or a bold new taste
          adventure, our menu is a celebration of taste and tradition. Join us
          and savor every moment, where every bite tells a story. For
          reservations, call us at 011-856-7458. Bon appétit!
        </p>
        <Link to="/login" className="btn btn-danger">
          Click here to login
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
