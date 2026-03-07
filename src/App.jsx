import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Customertic from "./components/Card/Customertic";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress}></Banner>
      <Customertic
        selectedProgress={selectedProgress}
        setSelectedProgress={setSelectedProgress}
        progress={progress}
        setProgress={setProgress}
      ></Customertic>
      <Footer></Footer>
    </>
  );
}

export default App;
