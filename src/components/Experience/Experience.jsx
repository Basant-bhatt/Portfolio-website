import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <section className='experience'>
        
              <div className="clients">
                <h1 className="contacttitle">My Skills</h1>
                <p className="clientdesc">
                  I have had the opportunity to work with a diverse Group of companies
                  some of the notable companies.I have worked with includes
                </p>
              <div className="clientimgs">
                <img src="html.png" alt="" className="clientimg" />
                <img src="css.jpg" alt="" className="clientimg" />
                <img src="js.png" alt="" className="clientimg" />
                <img src="react.jpg" alt="" className="clientimg" />
              </div>
              </div>
    </section>
  )
}

export default Experience