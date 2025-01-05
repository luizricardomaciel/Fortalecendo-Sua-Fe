import "./App.css";
import SeeMore from "./assets/sections/S3-seeMore/SeeMore";
import Home from "./assets/sections/S1-home/Home";
import Introduction from "./assets/sections/S2-introduction/Introduction";
import Routine from "./assets/sections/S4-routine/Routine";
import Clients from "./assets/sections/S5-clients/Clients";
import PorQue from "./assets/sections/S6-porQue/PorQue";
import Buy from "./assets/sections/S7-buy/Buy";
import Warranty from "./assets/sections/S8-warranty/Warranty";
import Faq from "./assets/sections/S9-FAQ/Faq";
import Footer from "./assets/sections/S10-footer/Footer";

function App() {
  return (
    <>
      <Home />
      <Introduction />
      <SeeMore />
      <Routine />
      <Clients />
      <PorQue />
      <Buy />
      <Warranty />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
