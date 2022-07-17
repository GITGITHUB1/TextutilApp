import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

//use Routes in place of Switch for latest versions
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  //this is the main handler which will decide the mode configuration
  console.log(null);
  const enableMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#07022c";
      alertFunction("Success ! Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertFunction("Success ! LightMode is enabled", "success");
    }
  };
  const alertFunction = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  return (
    <>
    <Router>
        <Navbar title="ModifyText" mode={mode} enableMode={enableMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode}  alertFunction={alertFunction}/>} />
          <Route exact path="/about" element={<About mode={mode} />} />n
        </Routes>
      </Router>
    </>
  );
}
export default App;
