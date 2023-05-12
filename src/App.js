import "./App.css";
import DrawerAppBar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { Signin } from "./views/Auth";
import "aos/dist/aos.css";
import * as Aos from "aos";
import { useEffect, useState } from "react";

function App() {
   useEffect(() => {
      Aos.init();
      Aos.refresh();
   }, []);
   return (
      <div>
         <BrowserRouter>
            <DrawerAppBar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Signin />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
