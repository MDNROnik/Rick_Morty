import { FaPlay } from "react-icons/fa";
import bubble from "../assets/bubble.png";
import portal from "../assets/portal.png";
const Banner = () => {
  return (
    <div className="pt-10 ">
      <div>
        <div>
          <div className="relative inline-block font-bold text-white text-6xl italic">
            <div
              className="absolute left-10 top-1 w-90 md:left-40 md:w-100 lg:left-100 lg:top-16 lg:w-190 h-16 lg:h-30 rounded-full opacity-40 lg:opacity-30 blur-xl"
              style={{
                background: "linear-gradient(to right, #a4ff56, #28fcbf)",
              }}
            ></div>
          </div>
        </div>
        {/* // Banner Title */}
        <div className="lg:text-8xl text-5xl ">
          <div className="flex items-start justify-start px-10 md:justify-center md:items-center lg:justify-center lg:items-center space-x-2">
            <div className="flex items-center gap-2 lg:gap-8">
              <div className="relative inline-block font-bold text-white  italic">
                <div className="absolute -top-18 -left-22 w-40 h-40 ">
                  <img src={bubble} />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white opacity-20 blur-xl"></div>
                <div>THE</div>
              </div>

              <img
                src={portal}
                alt="Rick"
                className="w-12 h-12 lg:w-40 lg:h-49 object-contain drop-shadow-md"
              />

              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                RICK
              </span>

              <span className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-300">
                <div className="absolute -top-3 left-5  lg:left-10">
                  <div
                    className="w-6 h-2 lg:w-10 lg:h-4 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #a4ff56, #28fcbf)",
                    }}
                  ></div>
                </div>

                <div>&</div>
              </span>
            </div>
          </div>

          <div className="flex gap-2 md:justify-center md:items-center lg:gap-8 px-10 lg:px-100">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              MORTY
            </span>
            <span className="text-white font-bold italic">WIKI</span>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-center md:items-center  px-6 ">
          <div className="flex flex-col md:justify-center md:items-center lg:flex-row items-start justify-start gap-6 p-4">
            {/* Watch Now Button */}
            <button className="flex order-2 sm:order-1 items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 text-white font-semibold shadow-lg ">
              <FaPlay className="text-white text-sm" />
              <span>Watch Now</span>
            </button>

            <p className=" order-1 md:px-10 sm:order-2 text-sm text-cyan-300 max-w-sm">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
