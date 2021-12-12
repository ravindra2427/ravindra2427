import logo from "./logo.svg";
import "./App.css";
import Car from "./components/car";
import Carx from "./components/cars";
import { CarB, CarC } from "./components/cars";
function App() {
  const c = false;
  return (
    <div className="App">
      <Car />
      <Carx />
      {c ? <CarB /> : <CarC />}
    </div>
  );
}

export default App;
