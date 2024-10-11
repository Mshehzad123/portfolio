import React, { useEffect } from "react";
import AOS from "aos"; // Make sure to import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import "./App.scss";
import Main from "./containers/Main";

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []); // Empty dependency array means it runs once after the first render

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
