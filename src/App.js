import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
const App = () => {
  const theme = {
    colors: {
      text1: "rgb(100, 94, 99)",
      text2: "rgb(247, 238, 246)",
      bg1: "linear-gradient(135deg, rgb(203, 243, 123), rgb(248, 248, 15))",
      bg2: " linear-gradient(135deg, rgb(243, 123, 223), rgb(248, 15, 229)) ;",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
