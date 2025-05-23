import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
const CastList = () => {
  const navigate = useNavigate();
  const { characters } = useContext(DataContext);

  // const simplifiedCharacters = characters?.map((char) => ({
  //   name: char.name,
  //   image: char.image,
  // }));
  
  const handleViewMore = () => {
    navigate("/casts")
  };

  return (
    <div className="bg-[#0a0f1b] p-6 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold border-2">Meet The Cast</h2>
        <button onClick={handleViewMore}>HELLO WORLD</button>
        <button onClick={handleViewMore} className="text-green-400 border-2">
          View All
        </button>
      </div>
      <div className="flex overflow-x-auto gap-4">
        {characters?.map((member, index) => (
          <div
            key={index}
            className="min-w-[120px] bg-[#1a2132] rounded-xl overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[120px] object-cover"
            />
            <div className="text-center p-2">
              <p className="text-sm font-medium text-white truncate">
                {member.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
