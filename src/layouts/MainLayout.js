import React from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
