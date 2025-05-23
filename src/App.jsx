import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import Banner from "./Components/Banner";
import CastList from "./Components/CastList";
import Episodes from "./Components/Episodes";
import Location from "./Components/Location";
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
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-image.png')] bg-cover bg-center opacity-5 z-0"></div> */}

        <div className="absolute left-87 top-10 z-10">
          <p>RICK AND MORTY</p>
        </div>

        <Banner></Banner>
        <CastList></CastList>
        <Episodes></Episodes>
        <Location></Location>
      </div>
    </>
  );
}

export default App;
