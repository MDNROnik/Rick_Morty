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

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((member, index) => (
          <Link
            to={`/casts/${index}`}
            key={index}
            className="bg-white/5 rounded-xl border-1 border-l-cyan-400 border-b-green-300 border-r-green-600 border-t-cyan-600 p-4 text-white shadow-md "
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
      </div>
    </div>
  );
};

export default Casts;
