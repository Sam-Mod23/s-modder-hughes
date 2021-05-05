import photo from "../images/profile_photo.png";
import { Link } from "react-scroll";

const PhotoQuicklinks = () => {
  return (
    <section className="photo-quicklinks">
      <img className="photo" alt="Sam M-H" src={photo}></img>
      <div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="work"
        >
          A look at my work...
        </Link>

        <Link
          to="soundtrack"
          spy={true}
          smooth={true}
          duration={500}
          className="soundtrack"
        >
          Something different...
        </Link>
      </div>
    </section>
  );
};

export default PhotoQuicklinks;
