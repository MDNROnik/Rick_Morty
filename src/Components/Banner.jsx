import { FaPlay } from "react-icons/fa";
import portal from "../assets/portal.png";
const Banner = () => {
  const handle = () => {
    console.log("HELEL");
  };
  return (
    <div className="pt-10 ">
      <div className="lg:text-8xl text-5xl ">
        {/* Line 1 */}
        <div className="flex items-start justify-start px-10 lg:justify-center lg:items-center space-x-2">
          <div className="flex items-center gap-2 lg:gap-8">
            <span className="text-white font-bold italic ">THE</span>

            <img
              src={portal}
              alt="Rick"
              className="w-12 h-12 lg:w-40 lg:h-49 object-contain drop-shadow-md"
            />

            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              RICK
            </span>

            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-300">
              &
            </span>
          </div>
        </div>

        {/* Line 2 */}
        <div className="flex gap-2 lg:gap-8 px-10 lg:px-93">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            MORTY
          </span>
          <span className="text-white font-bold italic">WIKI</span>
        </div>
      </div>

      <div className="flex items-center justify-center  px-6 ">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-6 p-4">
          {/* Watch Now Button */}
          <button className="flex order-2 sm:order-1 items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 text-white font-semibold shadow-lg ">
            <FaPlay className="text-white text-sm" />
            <span>Watch Now</span>
          </button>

          <p className=" order-1 sm:order-2 text-sm text-cyan-300 max-w-sm">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
