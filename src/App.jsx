import "./App.css";
import ParkingList from "./components/ParkingList";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex">
      <div className="flex h-full w-full">
        <div className="w-64 bg-sky-900 p-6 rounded-tr-lg text-center flex flex-col justify-start">
          <h1 className="text-2xl font-extrabold text-white">
            Parking Control
          </h1>
          <ul className="mt-6 space-y-4 flex-1">
            <li>
              <button
                className="w-full py-2 px-4 rounded-lg border border-sky-700 bg-sky-600
               text-white  hover:bg-sky-700 transition-colors"
              >
                Estacionamentos
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-2 p-6 overflow-auto">
          <ParkingList />
        </div>
      </div>
    </div>
  );
}

export default App;
