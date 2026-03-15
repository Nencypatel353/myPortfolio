import { motion } from "framer-motion"
import "../styles/hero.css"

function Hero(){

  return(
   <section className="hero">

  <div className="hero-content">

    <h1>
Frontend Developer
<span>Building Scalable Web Applications</span>
</h1>

<p>
Frontend Developer with 3+ years of experience building enterprise fintech
platforms, data-driven dashboards, and scalable UI applications using
Angular, TypeScript, and modern web technologies.
</p>

<motion.p
className="hero-tagline"
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
>
Always learning. Always improving.
</motion.p>

<div className="hero-buttons">
{/* <a href="#projects" className="btn-primary">View Projects</a> */}

<a 
href="https://drive.google.com/file/d/1E5GPxwsqApPQ3wOWXdAWvwYNGvigz4iz/view?usp=sharing"
className="btn-outline"
target="_blank"
rel="noopener noreferrer"
>
Download Resume
</a>
</div>

    <div className="hero-stats">
      <div>
        <h3>10+</h3>
        <p>Modules</p>
      </div>
      <div>
        <h3>Angular</h3>
        <p>Specialist</p>
      </div>
      <div>
        <h3>Fast</h3>
        <p>UI Performance</p>
      </div>
    </div>

  </div>

</section>
  )
}

export default Hero