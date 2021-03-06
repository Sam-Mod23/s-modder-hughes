import mobile from "../../images/mobile2.jpg";
// import mobileLight from "../../images/mobile2greyed.jpg";

const NCNewsFE = () => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${mobile})` }}>
      <div className="greyed"></div>
      <h2 className="project-card-header">NC-News Frontend</h2>
      <p className="project-card-text">
        Reddit style React App interacting with the NC-News backend Api
        <p>React ✦ Javascript ✦ HTML ✦ CSS</p>
        <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Sam-Mod23/nc-news-react-app"
            className="project-links"
          >
            Github repo
          </a>
          <span>
            {" | "}
            <a target="_blank" href="#" className="project-links">
              Hosted site incoming!
            </a>
          </span>
        </p>
      </p>
    </div>
  );
};

export default NCNewsFE;
