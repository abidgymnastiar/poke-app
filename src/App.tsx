import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import HeroPokemon from "./pages/HeroPokemon";
import DetailPokemon from "./pages/DetailPokemon";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<HeroPokemon />} />
          <Route path="/detail/:id" element={<DetailPokemon />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
