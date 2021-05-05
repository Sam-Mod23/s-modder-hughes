import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element id="aboutMe" name="aboutMe" className="aboutMe">
      <body>
        <h2
          style={{
            color: "#8E3829",
            padding: "0px 0px",
            margin: "4px 0px",
            "text-align": "left"
          }}
        >
          About me
        </h2>
        Hi, I’m Sam! I’m a Physics graduate, turned banking contractor, turned
        software developer currently working through a 14 week bootcamp at
        Northcoders!
        <p>
          After realising that my life as a Physicist was less globetrotting
          than Brian Cox would have you believe, upon graduation I stumbled into
          the banking sector. Having gained 7.5 years of experience, I had
          turned 30, the banking contract ended and I decided it was time to
          expand my skill-set.{" "}
        </p>
        <p>
          I’ve always been interested in tech and development from a user
          perspective and what I’ve loved about this course is how accessible it
          has made the once elusive areas of tech. The fact that in week 4 we
          developed a (admittedly rudimentary) Pokemon game completely opened up
          my perspective on the whole industry.
        </p>{" "}
        <p>
          In case it wasn’t already apparent, and completely against
          stereotype…I’m a training software developer who’s essentially just a
          big nerd - Star Wars, Marvel, Lego, Comic-Con, give me it all! I’m
          fascinated by the games industry, and love the way story telling is
          evoked through that medium. If only I had more time to play them!
        </p>{" "}
        <p>
          I also couldn’t imagine my life without music, having basically been
          to a music festival every year of my life since I was 17. I had
          planned for a conventions/gig tour of the USA last year, which I hope
          to rearrange soon! Most of all my experience of Northcoders has just
          made me realise how much I have missed learning something new. I can’t
          wait for this to continue.
        </p>
      </body>
    </Element>
  );
};
export default AboutMe;
