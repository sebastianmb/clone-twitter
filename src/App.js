import React from "react";
import GlobalStyles from './styles/GlobalStyles';
import Home from "./componentes/Home/Index";
import Sidebar from "./componentes/Sidebar/Index";
import Widgets from "./componentes/Widgets/Index";

function App() {
  return (
    <div className="App">
      

      {/*Sidebar*/}
      <Sidebar/>
      {/*Home*/}
      <Home/>
      Home

      
      {/*Widgets*/}
      <Widgets/>
      Widgets

      <GlobalStyles/>
    </div>
  );
}

export default App;
