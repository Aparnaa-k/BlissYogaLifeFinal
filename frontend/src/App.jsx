import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepage from "./components/home_page/home_page";
import Error from "./components/error/error";
import Mainpage from "./components/main_page/main_page";
import Questionaire from "./components/questionaire/questionaire";
import Details from "./components/details/details";


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<Error/>} />
      <Route path="/questionaire" element={<Questionaire />}/>
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/details" element={<Details/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
