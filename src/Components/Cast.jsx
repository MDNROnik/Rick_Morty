import { useContext, useEffect, useState } from "react";
import {
  FaGlobe,
  FaHeart,
  FaMapMarkerAlt,
  FaTransgender,
} from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";

import { FiExternalLink } from "react-icons/fi";
import { GiRobotGolem } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const Cast = () => {
  const id = useParams();

  const { characters } = useContext(DataContext);
  const [count, setCount] = useState(0);

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
        setCount(names.length);
      } catch (error) {
        console.error("Failed to fetch episodes:", error);
      }
    };

    fetchEpisodes();
  }, [character.episode]);

  const InfoCard = ({ icon, label, value, link }) => (
    <div
      className={`bg-white/5 rounded-xl p-4 border border-lime-500/30 text-white flex justify-between items-center ${link ? "cursor-pointer" : ""}`}
    >
      <div className="flex flex-col items-left text-white">
        <div className="text-2xl">{icon}</div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>

      {/* <div className="flex items-center gap-2">
        {icon}
        <div>
          <p className="text-xs text-gray-400">{label}</p>
          <p className="font-semibold text-sm">{value}</p>
        </div>
      </div> */}
      {link && <FiExternalLink className="text-gray-400" />}
    </div>
  );
  // className="outlined-text text-4xl font-bold"

  return (
    <div className=" relative min-h-screen text-white flex justify-center items-center">
      <div className="absolute left-0 top-0 h-full flex items-center z-0">
        <h1 className=" outlined-text text-[64px] font-bold text-[#00ffcc] opacity-15 rotate-[-90deg] tracking-widest">
          {character.name}
        </h1>
      </div>
      <div className="relative z-10 flex  items-center justify-center w-full max-w-4xl ">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#00ffcc]">
            {character.name}
          </h2>
          <div className=" bg-white/5  border border-lime-500/60">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full p-6 object-cover rounded-md"
            />
          </div>
        </div>

        <div className="h-40 w-px bg-green-500 mx-4"></div>

        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-3 gap-4">
            <InfoCard
              icon={<FaHeart className="text-lime-400" />}
              label="Status"
              value={character.status}
            />
            <InfoCard
              icon={<GiRobotGolem className="text-lime-400" />}
              label="Species"
              value={character.species}
            />
            <InfoCard
              icon={<FaTransgender className="text-lime-400" />}
              label="Gender"
              value={character.gender}
            />
          </div>

          <InfoCard
            icon={<FaGlobe className="text-lime-400" />}
            label="Origin"
            value={character.origin.name}
            link
          />
          <InfoCard
            icon={<FaMapMarkerAlt className="text-lime-400" />}
            label="Last Known Location"
            value={character.location.name}
            link
          />

          <div className="col-span-2 p-4 bg-white/5 border border-lime-500/30 rounded-xl  overflow-y-auto max-h-40">
            <span className="text-lime-500">
              <MdPlaylistPlay size={32} />
            </span>

            <p className="text-sm text-gray-400">Episode({count})</p>
            <ul className="list-disc list-inside space-y-1">
              {epiName?.map((ep, index) => (
                <li key={index}>{ep}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;
