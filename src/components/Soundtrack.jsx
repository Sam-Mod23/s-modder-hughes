import React from "react";
import { Element } from "react-scroll";

const Soundtrack = () => {
  return (
    <Element id="soundtrack" name="soundtrack" className="soundtrack-block">
      <h2
        style={{
          color: "#8E3829",
          padding: "0px 0px",
          margin: "4px 0px",
          "text-align": "center"
        }}
      >
        And now for something completely different...
      </h2>
      <section>
        <p>
          Back in the ye-olde year of 2015, two friends came to me on a muggy
          Saturday morning after a late previous night. They asked me to get
          into my dullest suit, and run around the city followed by a camera,
          making sure to change ties every 30 seconds. There was a keyboard in
          there somewhere as well, I’m sure.{" "}
        </p>

        <p>
          Cut to 4 months later and our wee short film had won the{" "}
          <a href="https://www.bbc.co.uk/programmes/articles/cfrxVG5J3K6g68ksjpmS50/soundtrack-is-music-to-the-ears-of-well-done-u-judges">
            Well Done U competition for BBC 5 Live’s Kermode and Mayo Film
            Review.
          </a>{" "}
          With my fellow cast and crew, we watched as the film was played in
          Leicester Square Odeon on the biggest screen I’ve ever seen, during a
          live broadcast of the 5 live show.{" "}
        </p>

        <p>
          Unfortunately, there are no re-releases planned. So you’ll have to
          enjoy it on the screen you’re currently using. Hello Jason Issacs!{" "}
        </p>
      </section>
      <iframe
        className="WDUSoundtrack"
        title="WDUSoundtrack"
        // width="800"
        // height="650"
        frameborder="0"
        src="https://www.bbc.co.uk/programmes/p03603v3/player"
      ></iframe>
    </Element>
  );
};

export default Soundtrack;
