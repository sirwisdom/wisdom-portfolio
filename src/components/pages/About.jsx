import React from "react";
import Header from "./Header";
import Wizzy from "../images/pic.jpg";

export default function About() {
  return (
    <section className="about-section">
      <h1>
        About <span className="styled">Me</span>
      </h1>
      <h3>Let me tell you a few things about me...</h3>

      <Header />
      <div className="about-div">
        <div className="about-portrait">
          <img src={Wizzy} alt=" Wisdom's picture" className="bio-image" />
        </div>

        <div className="bio">
          <h3 className="styled">BIO</h3>
          <p>
            Hi, I am Akpomeyoma, Wisdom Edafe, I am currently studying Computer
            Science and Informatics, in the department of Computer Science and
            Informatics, Federal University Otuoke, Which is located at Otuoke,
            Bayelsa State, Nigeria. I am fascinated by the web, and I love
            front-end development, I build front-end applications with
            technologies like HTML5, CSS3, SCSS, JavaScript and React. I also
            make graphics design as an early skill I picked up, using Corel Draw
            and Photoshop. I am a lover of team-work, my hobbies include coding,
            reading and learning new technologies, when I am not working I spend
            the time with my friends watching movies.
          </p>
        </div>

        <div className="work" id="work01">
          <h5 className="lg-work">Afridash</h5>
          <h6>Intern, Front-end developer</h6>
          <p>
            At Afridash, I was an intern for 6 months, where I studied
            JavaScript, React and Node and I was involved in the building
            process of the Afridash LMS Project, I consider Afridash the birth
            place of my developer career.
          </p>
        </div>
        <div className="work" id="work02">
          <h5 className="lg-work">NACOSS BAYELSA STATE</h5>
          <h6>Coordinator NACOSS Bayelsa State</h6>
          <p>
            During this period of one year as the Coordinator of the Nigeria
            Association of Computer Science Students Bayelsa State, I learned
            and develop my leadership skills to a higher height, some of my
            achievements was bringing the chapters in the state together, and
            helped in establishing a new chapter in the state.
          </p>
        </div>
        <div className="work" id="work03">
          <h5 className="lg-work">NACOSS FUO</h5>
          <h6>Director of Software</h6>
          <p>
            I was appointed the Director of software, by the president of
            Nigeria Association of Computer Science Students, in my school,
            after he saw my hard works in an earlier position I occupied in the
            department, as the Secretary of the Caretaker committee of the
            department of Computer Science and Informatics, Federal University
            Otuoke, During this period of one year, I worked earnestly with the
            team to make the department better.
          </p>
        </div>
      </div>
    </section>
  );
}
