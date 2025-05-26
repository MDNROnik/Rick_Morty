import { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div>
      {/* <div>
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
      </div> */}

      <div className="w-[1000px] ">
        <div className="bg-[#0a0f1b] p-6 text-white">
          <div className="relative px-8 py-10 bg-[#0f172a]">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(-200)}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(200)}
            >
              <FaChevronRight />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 px-6 scrollbar-hide"
            >
              {episodes?.map((episode, index) => (
                <div
                  key={index}
                  className="min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border border-green-500 text-white shadow-md"
                >
                  <p className="text-xs text-green-400 mb-1">
                    {episode.episode}
                  </p>
                  <p className="text-sm font-semibold truncate">
                    {episode.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
