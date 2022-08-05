import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const data = useContext(DataContext);
  const display = data.map((item, index) => {
    return <GalleryItem item={item} key={index} />;
  });

  return <div className="gallery">{display}</div>;
}

export default Gallery;
