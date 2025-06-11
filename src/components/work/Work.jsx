import React from "react"
import './Work.css'
function Work() {
  return (
    <section id="works" >
      <h2 className="worktitle">My Portfolio</h2>
      <span className="workdesc">
        I take pried in paying attention to the smallest details and making sure
        that my work is pixel perfect.I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence
      </span>
      <div className="worksimgs">
        <img src="img3.jpg" alt="" className="workimg" />
        <img src="img1.webp" alt="" className="workimg" />
        <img src="img2.avif" alt="" className="workimg" />
        <img src="img4.jpg" alt="" className="workimg" />
        <img src="img5.avif" alt="" className="workimg" />
        <img src="img6.jpg" alt="" className="workimg" />
      </div>
      <button className="workbtn">See more</button>
    </section>
  );
}

export default Work;
