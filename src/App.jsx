import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import { Outlet } from "react-router-dom";
import bg from "./assets/Background.png";
import Logo from "./assets/Logo.png";
import { DataContext } from "./Context/DataProvider";

function App() {
  const { setCharacters, setEpisodes, setLocations } = useContext(DataContext);

  // useEffect(() => {
  //   //fetch the all urls from the api
  //   fetch("https://rickandmortyapi.com/api")
  //     .then((response) => {
  //       // if (!response.ok) {
  //       //   throw new Error("Network response was not ok");
  //       // }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const { characters, episodes, locations } = data;

  //       //fetch the characters
  //       fetch(characters)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setCharacters(data);
  //           // console.log("Characters:", data);
  //         })
  //         .catch((error) => {
  //           console.error(
  //             "There was a problem with the fetch operation:",
  //             error
  //           );
  //         });

  //       //fetch the episodes
  //       fetch(episodes)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setEpisodes(data);
  //           // console.log("episodes:", data);
  //         })
  //         .catch((error) => {
  //           console.error(
  //             "There was a problem with the fetch operation:",
  //             error
  //           );
  //         });

  //       //fetch the locations
  //       fetch(locations)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setLocations(data);
  //           // console.log("locations:", data);
  //         })
  //         .catch((error) => {
  //           console.error(
  //             "There was a problem with the fetch operation:",
  //             error
  //           );
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // }, []);

  const initialLinks = useLoaderData();
  useEffect(() => {
    console.log(initialLinks);
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
