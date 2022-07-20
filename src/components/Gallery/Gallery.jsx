import "./index.css";
import imglinks from "../../assets/imglinks";

const Gallery = () => {
  return (
    <div className="gallery">
      {imglinks.map((link) => (
        <div key={link.id}>
          <img  className="gallery-image" src={link.url}></img> <p>{link.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
