import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navigation />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 20px",
          color: "white",
          backgroundImage: "url('/images/fishbackground.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 2,
          }}
        >
          Welcome to Fish Shop
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "30px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 2,
          }}
        >
          Explore our collection of beautiful aquarium fish.
        </p>

        <Link to="/products" style={{ position: "relative", zIndex: 2 }}>
          <button
            style={{
              padding: "14px 40px",
              fontSize: "18px",
              background: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 10px 15px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={e => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;