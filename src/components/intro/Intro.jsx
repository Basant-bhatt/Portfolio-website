import React from 'react'
import './Intro.css'

function intro() {
  return (
    <section id='intro'>
     

      <div className='introcontent'>
      <span className='hellow'>Hellow,</span>
      <br />
      <span>I'm <span className='introname'>Basant</span><br /><span>Website Developer</span></span>
      <p className='intropara'>I am a skilled and passionate web developer with experience in creating <br />
      visually appealing and user-friendly websities 
      </p>
      <button className='btn' onClick={()=>document.querySelector(".contactsection").scrollIntoView()}> <i className='fa-solid fa-bag-shopping'></i>Hire me</button>
      </div>

      <img src="image.png" className='introimg' />
     
    </section>
  )
}

export default intro