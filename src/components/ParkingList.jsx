import { useEffect, useState } from "react";
import { parkingService } from "../services/api";
import AddParking from "./AddParking";

export default function ParkingList() {
  const [parkings, setParking] = useState([]);

  useEffect(() => {
    parkingService
      .getAll()
      .then((response) => {
        setParking(response.data);
      })
      .catch((error) => {
        console.error("erro ao buscar parking", error);
      });
  }, []);

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="text-3xl text-black font-extrabold text-center mb-6">
          Estacionamentos
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 shadow-md rounded-lg table-fixed border border-gray-200 overflow-hidden">
          <thead className="bg-sky-900 text-white">
            <tr>
              <th className="px-4 py-2 border-b">Responsável</th>
              <th className="px-4 py-2 border-b">Número vaga</th>
              <th className="px-4 py-2 border-b">Bloco</th>
              <th className="px-4 py-2 border-b">Placa carro</th>
              <th className="px-4 py-2 border-b">Modelo carro</th>
              <th className="px-4 py-2 border-b">Cor carro</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>

          <tbody>
            {parkings.map((p) => (
              <tr key={p.parkingSpotNumber} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">
                  {p.responsibleName}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {p.parkingSpotNumber}
                </td>
                <td className="px-4 py-2 border-b text-center">{p.block}</td>
                <td className="px-4 py-2 border-b text-center">
                  {p.car.plateCar}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {p.car.modelCar}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {p.car.colorCar}
                </td>
                <td className="px-4 py-2 border-b text-center">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-80 rounded-lg shadow-md">
          <AddParking />
        </div>
      </div>
    </div>
  );
}
