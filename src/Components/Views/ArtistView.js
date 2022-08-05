// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useParams } from "react-router-dom";
import { useState } from "react";

function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  return (
    <div>
      <h2>The id passed was: {id}</h2>
      <p>Artist Data Goes Here!</p>
    </div>
  );
}

export default ArtistView;