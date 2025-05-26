import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

const Casts = () => {
  const { characters } = useContext(DataContext);

  return (
    // <div className="p-4">
    //   <h1 className="text-3xl font-bold text-cyan-400 mb-6">The Cast</h1>
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    //     {characters.map((member, index) => (
    //       <Link
    //         // onClick={() => {
    //         //   btn(index);
    //         // }}
    //         to={`/casts/${index}`}
    //         key={index}
    //         className="w-[220px] min-h-[240px] bg-white/5 rounded-xl border border-green-500 p-4 text-white shadow-md"
    //       >
    //         <img
    //           src={member.image}
    //           alt={member.name}
    //           className="w-full h-40 object-cover rounded-md"
    //         />
    //         <p className="mt-2 text-sm font-semibold">{member.name}</p>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    // <div className="px-4 py-6">
    //   <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center sm:text-left">
    //     The Cast
    //   </h1>

    //   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    //     {characters.map((member, index) => (
    //       <Link
    //         to={`/casts/${index}`}
    //         key={index}
    //         className="bg-white/5 rounded-xl border border-green-500 p-4 text-white shadow-md transition-transform hover:scale-105"
    //       >
    //         <img
    //           src={member.image}
    //           alt={member.name}
    //           className="w-full h-40 object-cover rounded-md"
    //         />
    //         <p className="mt-3 text-base font-semibold text-center sm:text-left">
    //           {member.name}
    //         </p>
    //       </Link>
    //     ))}
    //   </div>
    // </div>

    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center sm:text-left">
        The Cast
      </h1>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((member, index) => (
          <Link
            to={`/casts/${index}`}
            key={index}
            className="bg-white/5 rounded-xl border border-green-500 p-4 text-white shadow-md transition-transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover rounded-md"
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
