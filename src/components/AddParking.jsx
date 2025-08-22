import { useEffect, useState } from "react";

export default function AddParking() {
  const [parkings, setParking] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <div className="w-full p-6">
      <div>
        <h1 className="text-3xl text-black font-extrabold text-center mb-6">
          Adicionar Estacionamento
        </h1>
      </div>

      <div className="overflow-x-auto space-y-4 p-6 bg-sky-900 rounded-lg shadow-md border border-sky-400">
        <input
          type="text"
          placeholder="Número da vaga"
          className="rounded-md px-4 py-2 border border-gray-300 placeholder-gray-400  focus:outline-none transition"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Bloco"
          className="rounded-md px-4 py-2 border border-gray-300 placeholder-gray-400  focus:outline-none transition"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Apartamento"
          className="rounded-md px-4 py-2 border border-gray-300 placeholder-gray-400  focus:outline-none transition"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Responsável"
          className="rounded-md px-4 py-2 border border-gray-300 placeholder-gray-400  focus:outline-none transition"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
    </div>
  );
}
