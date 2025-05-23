import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const Casts = () => {
  const { characters } = useContext(DataContext);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">The Cast</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {characters.map((member, index) => (
          <Link
            // onClick={() => {
            //   btn(index);
            // }}
            to={`/casts/${index}`}
            key={index}
            className="bg-gray-800 rounded-2xl p-2 shadow-lg text-center text-white hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg mb-2 h-32 w-full object-cover"
            />
            <p className="text-sm font-medium">{member.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Casts;
