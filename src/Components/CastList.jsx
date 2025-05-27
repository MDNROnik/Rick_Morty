import { useContext, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const CastList = () => {
  const navigate = useNavigate();
  const { characters } = useContext(DataContext);
  const [postion, setPosition] = useState(0);

  const scrollRef = useRef(null);

  const scroll = (offset) => {
    // console.log(scrollRef.current.scrollLeft);

    setPosition(scrollRef.current.scrollLeft + offset);

    console.log(scrollRef.current.scrollLeft + offset);
    scrollRef.current.scrollLeft += offset;
  };

  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1022 });
  const isLarge = useMediaQuery({ minWidth: 1023 });

  const handleViewMore = () => {
    navigate("/casts");
  };

  return (
    <div>
      {/* <>
        {isSmall && <p>Small</p>}
        {isMedium && <p>Medium</p>}
        {isLarge && <p>Large</p>}
      </> */}
      <div className="  text-white">
        <div className="flex justify-between items-center px-8 py-4 ">
          <h2 className="font-poppins text-xl font-semibold ">Meet The Cast</h2>
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
          {isLarge && postion < 2810 && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(200)}
            >
              <FaChevronRight />
            </button>
          )}
          {isMedium && postion < 3600 && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(200)}
            >
              <FaChevronRight />
            </button>
          )}
          {isSmall && postion < 3909 && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-lime-500 rounded-full p-2 shadow-md"
              onClick={() => scroll(200)}
            >
              <FaChevronRight />
            </button>
          )}

          {/* <div
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
                  <p className="text-sm font-medium text-white">{char.name}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide snap-x scroll-smooth snap-mandatory"
          >
            {characters.map((char, index) => (
              <div
                key={index}
                className="rounded-lg min-w-[200px] relative inline-block px-4 py-2 bg-[#2e3442] text-white font-medium text-sm border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600
                    [clip-path:polygon(0_0,100%_0,100%_85%,75%_100%,0_100%)] 
                    "
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className=" rounded-lg w-full h-48 object-cover"
                />
                <p className="pt-4 pb-4 text-sm font-semibold truncate">
                  {char.name}
                </p>
                <div className="relative">
                  <div className="absolute w-[2px] h-[64px] bg-green-400 -top-8 left-46 transform rotate-52 origin-top-left " />
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastList;
