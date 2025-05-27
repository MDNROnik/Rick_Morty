import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";


const CastList = () => {
  const navigate = useNavigate();
  const { characters } = useContext(DataContext);
  const [postion, setPosition] = useState(0);

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    console.log(scrollRef.current.scrollLeft);

    setPosition(scrollRef.current.scrollLeft + offset);

    console.log(scrollRef.current.scrollLeft + offset);
    scrollRef.current.scrollLeft += offset;
  };

  const handleViewMore = () => {
    navigate("/casts");
  };

  return (
    // className="w-[1000px] "
    <div>
      {/* <svg width="200" height="200" viewBox="0 0 100 100">
        <polygon
          points="0,0 0, 50 100, 50 100, 30 70,0  0, 0"
          fill="#3B82F6"
          stroke="#1E40AF"
          strokeWidth="2"
        />
      </svg> */}

      <div className="  text-white">
        <div className="flex justify-between items-center px-8 py-4 ">
          <h2 className="text-xl font-semibold ">Meet The Cast</h2>
          <button
            onClick={handleViewMore}
            className="px-4 py-1 border border-lime-500 text-gray-300 rounded-full hover:bg-lime-500 hover:text-black transition"
          >
            View All
          </button>
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
          {postion < 2549 && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(200)}
            >
              <FaChevronRight />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-10  scrollbar-hide snap-x scroll-smooth snap-mandatory"
          >
            {characters.map((char, index) => (
              <div
                className=" relative bg-[#1a2132] text-white rounded-md min-w-[160px] overflow-hidden border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600 "
                key={index}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 clip-bottom-edge">
                  <p className="text-sm font-medium text-white">Jerry Smith</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastList;
