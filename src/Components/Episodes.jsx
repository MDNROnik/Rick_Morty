import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataContext } from "../Context/DataProvider";

const Episodes = () => {
  const { episodes } = useContext(DataContext);
  const [postion, setPosition] = useState(0);

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    // console.log(scrollRef.current.scrollLeft);
    // console.log(episodes);

    setPosition(scrollRef.current.scrollLeft + offset);

    console.log(scrollRef.current.scrollLeft + offset);
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className="  text-white">
      <div className="flex justify-between items-center px-8 py-4">
        <h2 className="text-xl font-semibold ">Epicodes</h2>
      </div>
      <div className="relative px-8 py-10 ">
        {postion > 0 && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
            onClick={() => scroll(-200)}
          >
            <FaChevronLeft />
          </button>
        )}
        {postion < 2850 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
            onClick={() => scroll(200)}
          >
            <FaChevronRight />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4  scrollbar-hide snap-x scroll-smooth snap-mandatory"
        >
          {episodes?.map((episode, index) => (
            <div
              key={index}
              className="bg-white/5 min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600 text-white shadow-md"
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
