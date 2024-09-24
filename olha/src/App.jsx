import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFetch } from "./reducers/data.reducer";
import Header from "./components/header/header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import AboutMe from "./pages/about/about";
import Consultation from "./pages/consultation/consultation";
import OnlineConsult from "./pages/onlineConsult/onlineConsult";
import OfflineConsultation from "./pages/offlineConsult/offlineConsult";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultation/online" element={<OnlineConsult />} />
          <Route path="/consultation/offline" element={<OfflineConsultation />} />
        <Route path="*" element={<p>page is not found</p>} />
      </Routes>
    </>
  );
}

export default App;
