import React from "react";
import NavBar from "./componets/NavBar/NavBar";
import './componets/NavBar/NavBar.css'
import './componets/NavBar/App.css'
import Banner from "./componets/Banner/Banner";
import './componets/Banner/Bannner.css'
import RowPost from "./componets/RowPost/RowPost";

//urls
import { actions, comedy, Documentrys, romance, trending } from "./componets/urls";
import { orginals } from "./componets/urls";


//routing pages

function App() {
  return (
     <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orginals} tittle='Netflix Orginals'/>
        <RowPost url={actions} tittle="Action Movies" isSmall/>
        <RowPost url={trending} tittle="Trending Movies" isSmall/>
        <RowPost url={comedy} tittle="Comedy Movies" isSmall/>
        <RowPost url={romance} tittle="Romance Movies" isSmall/>
        <RowPost url={Documentrys} tittle="Documentrys" isSmall/>
     
     </div>
  );
}

export default App;
