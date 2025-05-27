import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const Casts = () => {
  const { characters } = useContext(DataContext);

  return (
    <div className="px-4 py-6 pt-25">
      <h1 className="text-6xl font-bold text-cyan-400 mb-10 text-center sm:text-left">
        The Cast
      </h1>

      {/* <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((member, index) => (
          <Link
            to={`/casts/${index}`}
            key={index}
            className="bg-[#2e3442] rounded-xl border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600 p-4 text-white shadow-md "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-md"
            />
            <p className="mt-3 text-base font-semibold text-center sm:text-left">
              {member.name}
            </p>
          </Link>
        ))}
      </div> */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((char, index) => (
          <Link
            to={`/casts/${index}`}
            key={index}
            className="rounded-lg min-w-[200px] relative inline-block px-4 py-2 bg-black/2 text-white font-medium text-sm border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600
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
              <div className="absolute w-[2px] h-24 lg:h-24 bg-green-400 -top-9 md:-top-10 lg:-top-9 left-47 md:left-54 lg:left-69 transform rotate-52 md:rotate-55 lg:rotate-61 origin-top-left " />
              {/* <div className="absolute w-[2px] h-22  lg:h-22 bg-green-400 -top-8 left-52 lg:left-67 transform rotate-55 lg:rotate-61 origin-top-left " /> */}
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Casts;
