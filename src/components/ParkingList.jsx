import { useEffect, useState } from "react";
import { parkingService } from "../services/api";

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
    <div>
      <table>
        <thead>
          <tr>
            <th>parkingSpotNumber</th>
            <th>Responsável</th>
            <th>Bloco</th>
            <th>Carro</th>
            <th>Placa do carro</th>
            <th>Modelo do carro</th>
            <th>Cor do carro</th>
            <th>Placa</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parkings.map((p) => (
            <tr key={p.parkingSpotNumber}>
              <td>{p.responsibleName}</td>
              <td>{p.parkingSpotNumber}</td>
              <td>{p.block}</td>
              <td>{p.car.plateCar}</td>
              <td>{p.car.modelCar}</td>
              <td>{p.car.colorCar}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
