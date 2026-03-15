import "../styles/sections.css"

function Projects(){

return(

<section id="projects">

<h2 className="section-title">Projects</h2>

<div className="projects-grid">

<div className="project-card">
<h3>Portfolio Website</h3>
<p>Personal developer portfolio built with React showcasing skills, projects, and contact information.</p>
</div>

<div className="project-card">
<h3>Smart Travel Platform</h3>

<p>
Enterprise travel booking platform built with Angular and TypeScript supporting hotel search, bookings, and real-time updates.
</p>

<a 
href="https://nencypatel353.github.io/smartTravel/" 
target="_blank" 
rel="noopener noreferrer"
className="project-link"
>
Live Demo
</a>

</div>



</div>

</section>

)

}

export default Projects