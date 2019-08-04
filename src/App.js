import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Experience from "./components/Experience/Experience";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Experience />
    </main>
  );
}

export default App;
