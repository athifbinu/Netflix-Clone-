import React from "react";
import NavBar from "./componets/NavBar/NavBar";
import './componets/NavBar/NavBar.css'
import './componets/NavBar/App.css'
import Banner from "./componets/Banner/Banner";
import './componets/Banner/Bannner.css'
import RowPost from "./componets/RowPost/RowPost";


function App() {
  return (
     <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost/>
     </div>
  );
}

export default App;
