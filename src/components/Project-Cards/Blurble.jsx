import blurble from "../../images/blurble.jpg";

const Blurble = () => {
  return (
    <div
      href="#"
      className="project-card"
      style={{ backgroundImage: `url(${blurble})` }}
    >
      <h2 className="project-card-header">Blurble</h2>
      <p className="project-card-text">
        A book-club app for friends. Built using MongoDB and React Native.
        Having complete independence to work on this project, our team decided
        which technologies, platforms and packages to use. I worked primarily on
        the backend, exploring a completely unfamiliar database package in
        MongoDB and implementing it from the ground up.
        <p>Javascript ✦ PSQL ✦ Express ✦ Supertest</p>
        <p>
          <a
            href="https://github.com/Sam-Mod23/be-nc-news"
            className="project-links"
          >
            Github repo
          </a>
          <span>
            {" | "}
            <a
              href="https://be-nc-news-sjmh.herokuapp.com/api"
              className="project-links"
            >
              Heroku app
            </a>
          </span>
        </p>
      </p>
    </div>
  );
};

export default Blurble;
