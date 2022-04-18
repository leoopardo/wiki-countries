import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import Country from "./countries.json"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="conteiner">
          <div className="row">
            <div class="col-5">
              <CountriesList countries={Country} />
            </div>
          </div>
        </div>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
