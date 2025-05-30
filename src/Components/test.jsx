import { useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
const Test = () => {
  const navigate = useNavigate();
  const { characters } = useContext(DataContext);
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };
  return (
    <div className="w-[1000px] ">
      <div className="relative px-8 py-10 bg-[#0f172a]">
        {/* Scroll Buttons */}
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

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-6 scrollbar-hide"
        >
          {characters.map((char) => (
            <div className="relative bg-[#1a2132]  rounded-md min-w-[160px] overflow-hidden mr-4 shadow-lg">
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 text-white text-sm text-center">
                {char.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
