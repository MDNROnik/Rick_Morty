import { FaPlay } from "react-icons/fa";
import Logo from "../assets/logo.png";
import portal from "../assets/portal.png";

const Banner = () => {
  const handle = () => {
    console.log("HELEL");
  };
  return (
    <div>
      <div className="flex justify-center">
        <img src={Logo} className="w-32" />
      </div>
      <div className="pt-20 ">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-white text-8xl font-bold italic">THE</span>

          <img
            src={portal}
            alt="Rick"
            className="w-30 h-30 object-contain drop-shadow-md"
          />

          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            RICK
          </span>

          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-300">
            &
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            MORTY
          </span>
          <span className="text-white text-8xl font-bold italic">WIKI</span>
        </div>

        <div className="flex items-center justify-center  px-6">
          <div className="flex items-center gap-6  rounded p-4">
            {/* Watch Now Button */}
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 text-white font-semibold shadow-lg ">
              <FaPlay className="text-white text-sm" />
              <span>Watch Now</span>
            </button>

            {/* Description */}
            <p className="text-sm text-cyan-300 max-w-sm">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>

        {/* <div className="flex items-center justify-center space-x-2 p-10">
        <button
          onClick={() => console.log("test clicked")}
          className="mt-6 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full z-10"
        >
          ▶ Watch Now
        </button>

        <p className="mt-4 text-center text-sm max-w-xl text-gray-300 relative z-10">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default Banner;
