import news from "../../images/nc-news.jpg";

const NCNewsBE = () => {
  return (
    <div
      href="#"
      className="project-card"
      style={{ backgroundImage: `url(${news})` }}
    >
      <div className="greyed"></div>
      <h2 className="project-card-header">NC-News Backend</h2>
      <p className="project-card-text">
        Reddit style RESTful Api built using MVC and TDD methods, interacting
        with a PSQL database.
        <p>Javascript ✦ PSQL ✦ Express ✦ Supertest</p>
        <p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Sam-Mod23/be-nc-news"
            className="project-links"
          >
            Github repo
          </a>
          <span>
            {" | "}
            <a
              rel="noreferrer"
              target="_blank"
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

export default NCNewsBE;
