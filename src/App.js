import { createContext, useState } from "react";
import AxiosFetch from "./API/AxiosFetch";
import Images from "./components/Images";
import Jumbo from "./components/Jumbo";
import Navbar from "./components/Navbar";
import SearchF from "./components/SearchF";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, error, isLoading, fetchData } = AxiosFetch(
    `/search/photos?page=1&query=office>&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Navbar />
      <Jumbo>
        <SearchF />
      </Jumbo>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
