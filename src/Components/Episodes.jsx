import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { DataContext } from "../Context/DataProvider";

const Episodes = () => {
  const { episodes } = useContext(DataContext);
  const [postion, setPosition] = useState(0);

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    // console.log(scrollRef.current.scrollLeft);
    // console.log(episodes);

    setPosition(scrollRef.current.scrollLeft + offset);

    // console.log(scrollRef.current.scrollLeft + offset);
    scrollRef.current.scrollLeft += offset;
  };

  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1022 });
  const isLarge = useMediaQuery({ minWidth: 1023 });

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
        {isLarge && postion < 2815 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
            onClick={() => scroll(200)}
          >
            <FaChevronRight />
          </button>
        )}
        {isMedium && postion < 3601 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
            onClick={() => scroll(200)}
          >
            <FaChevronRight />
          </button>
        )}
        {isSmall && postion < 3915 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
            onClick={() => scroll(200)}
          >
            <FaChevronRight />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide snap-x scroll-smooth snap-mandatory"
        >
          {episodes?.map((episode, index) => (
            <div
              className="rounded-lg  min-w-[200px] relative inline-block px-4 py-2 bg-black/2 text-white font-medium text-sm border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600
                    [clip-path:polygon(0_0,100%_0,100%_85%,95%_100%,0_100%)] 
                    "
            >
              <p className="text-xs text-green-400 mb-1">{episode.episode}</p>
              <p className="text-sm font-semibold truncate">{episode.name}</p>
              <div className="relative">
                {/* Diagonal Line */}
                <div className="absolute w-[2px] h-[30px] bg-green-400 -top-3 left-49 transform rotate-50 origin-top-left " />
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episodes;
