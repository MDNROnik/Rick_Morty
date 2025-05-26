import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataContext } from "../Context/DataProvider";

const Location = () => {
  const { locations } = useContext(DataContext);
  const [postion, setPosition] = useState(0);

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    console.log(scrollRef.current.scrollLeft);

    scrollRef.current.scrollLeft += offset;
    setPosition(scrollRef.current.scrollLeft);
  };
  return (
    <div>
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Locations</h2>
        <div className="flex overflow-x-auto gap-4">
          {locations?.map((location, index) => (
            <div
              key={index}
              className="min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border border-green-500 text-white shadow-md"
            >
              <p className="text-xs text-green-400 mb-1">#{location.id}</p>
              <p className="text-sm font-semibold truncate">{location.name}</p>
            </div>
          ))}
        </div>
      </div> */}

      <div>
        <div className=" p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold ">Locations</h2>
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
            {postion < 3800 && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
                onClick={() => scroll(200)}
              >
                <FaChevronRight />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 px-6 scrollbar-hide snap-x scroll-smooth snap-mandatory"
            >
              {locations?.map((location, index) => (
                <div
                  key={index}
                  className="bg-white/5 min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border border-green-500 text-white shadow-md"
                >
                  <p className="text-xs text-green-400 mb-1">#{location.id}</p>
                  <p className="text-sm font-semibold truncate">
                    {location.name}
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

export default Location;
