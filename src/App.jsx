import { HashRouter, Routes, Route } from "react-router-dom";

import Create from "./pages/Create";
import SingleItem from "./pages/SingleItem";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/location/:id" element={<SingleItem />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
