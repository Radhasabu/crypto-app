import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
// import Temp from "./components/Temp";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>s
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
