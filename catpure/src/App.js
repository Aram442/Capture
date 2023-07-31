//Import Style
import GolobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
//Router
import { Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <GolobalStyle /> 
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs/>} />
        <Route path="/work" exact element={<OurWork/>} />
        <Route path="/contact" exact element={<ContactUs/>} />
      </Routes>
    </div>
  );
}
export default App;
