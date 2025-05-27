import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import { Outlet } from "react-router-dom";
import bg from "./assets/Background.png";
import Logo from "./assets/Logo.png";
import { DataContext } from "./Context/DataProvider";

function App() {
  const { setCharacters, setEpisodes, setLocations } = useContext(DataContext);

  const initialLinks = useLoaderData();
  useEffect(() => {
    // console.log(initialLinks);
    if (initialLinks) {
      const { characters, episodes, locations } = initialLinks;
      fetch(characters)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results);
          setCharacters(data.results);
        });
      fetch(episodes)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results);
          setEpisodes(data.results);
        });

      fetch(locations)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results);
          setLocations(data.results);
        });
    }
  }, [initialLinks]);

  // const btn = () => {
  //   console.log(1111);
  // };

  return (
    <div
      className=" bg-cover bg-center text-white p-4 flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950 to-blue-950 opacity-90"></div>
      <div className="w-full relative z-10 text-white custom-scrollbar">
        <div className="flex justify-center">
          <img src={Logo} className="w-40 pt-5" />
        </div>
        <div className="relative -left-4 lg:left-0">
          <Outlet className=""></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
