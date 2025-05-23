const Banner = () => {
  const handle = () => {
    console.log("HELEL");
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center relative z-10">
        <span className="italic text-white drop-shadow-md">THE</span>
        <span className="inline-block mx-2 text-green-400 font-extrabold">
          RICK &
        </span>
        <span className="inline-block text-green-500 font-extrabold">
          MORTY
        </span>
        <span className="italic text-white drop-shadow-md"> WIKI</span>
      </h1>

      <p className="mt-4 text-center text-sm max-w-xl text-gray-300 relative z-10">
        Brilliant but boozy scientist Rick hijacks his fretful teenage grandson,
        Morty, for wild escapades in other worlds and alternate dimensions.
      </p>

      <button
        onClick={() => console.log("test clicked")}
        className="mt-6 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full z-10"
      >
        ▶ Watch Now
      </button>
    </div>
  );
};

export default Banner;
