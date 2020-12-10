import React, { useEffect, useState } from "react";
import axios from "axios";

const Test1 = props => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      let response = await axios.get("http://localhost:3001/artists");
      setArtists(response.data);
    };
    getArtists();
  }, []);

  const handleSearch = async term => {
    let response = await axios.get(
      `http://localhost:3001/artists?genre=${term}`
    );
    setArtists(response.data);
  };

  console.debug(artists);
  debugger

  return (
    // <div style={{ flexDirection: "row"}}>
    <div>
      {artists.map(artist => (
        <p>{artist.name}</p>
      ))}
      <h3>Filter By</h3>
      <button onClick={() => handleSearch("rock")}>Rock</button>
      <button onClick={() => handleSearch("classical")}>Classical</button>
      <button onClick={() => handleSearch("trash")}>Garbage</button>
    </div>
  );
};

export default Test1;
