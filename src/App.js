import React from "react";
import "./App.css";
import Contenu from "./components/ContextHooks/Contenu";
import ThemeContextProvider from "./components/Context/ThemeContext";
import BtnToggle from "./components/BtnToggle/BtnToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToggle /> 
        <Contenu />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
