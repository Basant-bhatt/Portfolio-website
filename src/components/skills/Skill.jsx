import React from "react";
import "./skill.css";

function Skill() {
  return (
    <section id="skills">
      <span className="skilltitle">What I Do</span>
      <p className="skilldesc">
        I am a skilled and passionate ewb devoloper with experience in creating
        visually apearing and user-friendly websites. I have a strong
        understamding of development and a keen eye for detail. I am proficient
        in HTML , CSS and Javascript as well as design software such as Adobe
        Photoshop and illustrator.
      </p>
      <div className="skillbars">
        <div className="skillbar">
            <img src="ui.jpg" alt=""   className="skilllogo"/>
        <div className="skilltext">
            <h2>UI/UX design</h2>

            <p>This is a demo text , you can write your own content here</p>
        </div>
        </div>
        <div className="skillbar">
            <img src="web.jpg" alt=""  className="skilllogo" />
        <div className="skilltext">
            <h2>Website design</h2>

            <p>This demo text can be changed while making the production ready site</p>
        </div>
        </div>
        <div className="skillbar">
            <img src="app.jpg" alt=""  className="skilllogo" />
        <div className="skilltext">
            <h2>App design</h2>
            <p>You can write text related to mobile app development</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
