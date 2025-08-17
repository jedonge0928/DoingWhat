import { useEffect } from "react";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modalSlice";
import CartModal from "../components/modal/CartModal";

export default function MainLayout() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartModal.isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        dispatch(closeModal());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

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
      {isOpen && <CartModal onClose={() => dispatch(closeModal())} />}
    </div>
  );
}
