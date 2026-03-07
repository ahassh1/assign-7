import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Customertic from "./components/Card/Customertic";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState([]);
  const [selectedResolve, setSelectedResolve] = useState([]);
  const removeProgress = (p) => {
    const filteredData = selectedProgress.filter(
      (customer) => customer.id !== p.id,
    );
    setSelectedProgress(filteredData);
    setProgress(progress - 1);
  };

  const removeCard = (c) => {
    const filteredCard = selectedProgress.filter(
      (customer) => customer.id !== c.id,
    );
    setSelectedProgress(filteredCard);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner resolved={resolved} progress={progress}></Banner>
      <Customertic
        removeCard={removeCard}
        selectedResolve={selectedResolve}
        setSelectedResolve={setSelectedResolve}
        resolved={resolved}
        setResolved={setResolved}
        removeProgress={removeProgress}
        selectedProgress={selectedProgress}
        setSelectedProgress={setSelectedProgress}
        progress={progress}
        setProgress={setProgress}
      ></Customertic>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
