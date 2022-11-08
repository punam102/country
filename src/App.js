import "./App.css";
import Counrty from "./components/Counrty";
import { Routes, Route } from "react-router-dom";
import Modals from "./components/Modals";
import { useEffect, useState } from "react";
// import Theme from "./components/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
    {/* <div className="App"> */}
      <h1>Masai-country</h1>
      {/* <Theme/> */}
      Dark <input type="range" onClick={toggleTheme} />
      Light
      <Routes>
        <Route path="/" element={<Counrty />} />
        <Route path="/:id" element={<Modals />} />
      </Routes>
    </div>
  );
}

export default App;
