import { useContext, useEffect, useState } from "react";
import { FaGlobe, FaHeart, FaMars } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import Background from "../assets/Background.png"
import img from "../assets/bubble.png"

const Cast = () => {
  const id = useParams();

  const { characters } = useContext(DataContext);

  const character = characters[id.id];

  const [epiName, setEpiName] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const responses = await Promise.all(
          character.episode.map((ep) => fetch(ep).then((res) => res.json()))
        );
        const names = responses.map((data) => data.name);
        setEpiName(names);
      } catch (error) {
        console.error("Failed to fetch episodes:", error);
      }
    };

    fetchEpisodes();
  }, [character.episode]);

  return (
    <div className="bg-[{img}] bg-cover bg-center h-64 w-full">
      <h1>hello world</h1>
      <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-white p-6 flex justify-center items-center">
        <div className="bg-[#1b263b] shadow-lg rounded-2xl p-6 max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <img
              src={character.image}
              alt={character.name}
              className="rounded-xl w-40 h-40 object-cover border-4 border-[#00ffcc]"
            />
            <h2 className="mt-4 text-2xl font-bold text-[#00ffcc]">
              {character.name}
            </h2>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#243b55] rounded-xl shadow">
              <p className="text-sm text-gray-400">Status</p>
              <div className="flex items-center gap-2">
                <FaHeart className="text-green-400" />
                <p>{character.status}</p>
              </div>
            </div>

            <div className="p-4 bg-[#243b55] rounded-xl shadow">
              <p className="text-sm text-gray-400">Species</p>
              <div className="flex items-center gap-2">
                <p>{character.species}</p>
              </div>
            </div>

            <div className="p-4 bg-[#243b55] rounded-xl shadow">
              <p className="text-sm text-gray-400">Gender</p>
              <div className="flex items-center gap-2">
                <FaMars className="text-blue-400" />
                <p>{character.gender}</p>
              </div>
            </div>

            <div className="p-4 bg-[#243b55] rounded-xl shadow">
              <p className="text-sm text-gray-400">Origin</p>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-teal-400" />
                <p>{character.origin.name}</p>
              </div>
            </div>

            <div className="col-span-2 p-4 bg-[#243b55] rounded-xl shadow">
              <p className="text-sm text-gray-400">Last Known Location</p>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-purple-400" />
                <p>{character.location.name}</p>
              </div>
            </div>

            <div className="col-span-2 p-4 bg-[#243b55] rounded-xl shadow overflow-y-auto max-h-40">
              <p className="text-sm text-gray-400">Episode(s)</p>
              <ul className="list-disc list-inside space-y-1">
                {epiName?.map((ep, index) => (
                  <li key={index}>{ep}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;
