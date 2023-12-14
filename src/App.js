import React, { useState } from "react";
import "./App.css";
import Navigator from "./components/UI/Navigator";

function App() {
  const [navPage, setNavPage] = useState("dashboard");

  const handleNavPage = (page) => {
    console.log(page);
    setNavPage(page);
  };

  return (
    <>
      <Navigator page={navPage} changePage={handleNavPage} />
    </>
  );
}

export default App;
