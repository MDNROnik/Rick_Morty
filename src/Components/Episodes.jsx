import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Episodes = () => {
  const { episodes } = useContext(DataContext);
  // const res = episodes.results;
  // const simplifiedEpisodes = episodes?.map((epi) => ({
  //   episode: epi.episode,
  //   name: epi.name,
  // }));
  // if (simplifiedEpisodes) {
  //   // setCast(simplifiedCharacters);
  //   // console.log("Simplified Characters:", simplifiedEpisodes[0].name);
  // }

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Episodes</h2>
        <div className="flex overflow-x-auto gap-4">
          {episodes?.map((episode, index) => (
            <div
              key={index}
              className="min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border border-green-500 text-white shadow-md"
            >
              <p className="text-xs text-green-400 mb-1">{episode.episode}</p>
              <p className="text-sm font-semibold truncate">{episode.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
