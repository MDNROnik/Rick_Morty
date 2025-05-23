import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";

const Location = () => {
  const { locations } = useContext(DataContext);
//   const res = locations.results;
// //   console.log(res);
  
//   const simplifiedLocation = locations?.map((epi) => ({
//     id: epi.id,
//     name: epi.name,
//   }));
//   if (simplifiedLocation) {
//     // setCast(simplifiedCharacters);
//     // console.log("Simplified Characters:", simplifiedLocation[9]);
//   }
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Locations</h2>
        <div className="flex overflow-x-auto gap-4">
          {locations?.map((location, index) => (
            <div
              key={index}
              className="min-w-[200px] px-4 py-2 bg-[#1a2132] rounded-xl border border-green-500 text-white shadow-md"
            >
              <p className="text-xs text-green-400 mb-1">#{location.id}</p>
              <p className="text-sm font-semibold truncate">{location.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
