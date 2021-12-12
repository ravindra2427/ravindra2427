import Car from "./car";

function CarA() {
  return (
    <div>
      <h1> Car in Cars A</h1>
      <Car> </Car>
    </div>
  );
}

function CarB() {
  return (
    <div>
      <h1> Car in Cars B</h1>
      <Car> </Car>
    </div>
  );
}
function CarC() {
  return (
    <div>
      <h1> Car in Cars C</h1>
      <Car> </Car>
    </div>
  );
}

export default CarA;

export { CarB, CarC };
