import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx"
import CompCalc from "./CompCalc.jsx"
import About from "./About.jsx"
import Disbursement from "./Disbursement.jsx"

function App() {
  const [page, setPage] = useState("compCalc");

  const handlePage = (view) => {
    setPage(view);
  };

  return (
    <div className="container">
      <Header onChange={handlePage} />
      <div>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "compCalc" && <CompCalc />}
        {page === "disbursement" && <Disbursement />}
      </div>
      <Footer />
    </div>
  )
}

export default App;
