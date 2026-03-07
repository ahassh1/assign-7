import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Customertic from "./components/Card/Customertic";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState([]);
  const removeProgress = (p) => {
    console.log(p);
    const filteredData = selectedProgress.filter(
      (customer) => customer.id !== p.id,
    );
    setSelectedProgress(filteredData);
    setProgress(progress - 1);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner resolved={resolved} progress={progress}></Banner>
      <Customertic
        resolved={resolved}
        setResolved={setResolved}
        removeProgress={removeProgress}
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
