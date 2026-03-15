import profile from "../assets/profile.JPG"

function About(){

 return(
  <section id="about" className="about">

<div className="about-container">

<div className="about-image">
<img src="/profile.JPG" alt="Profile" />
</div>

<div className="about-text">

<h2>About Me</h2>

<p>
Frontend Developer with 3+ years of experience building scalable
enterprise web applications and fintech platforms.
</p>

<p>
I specialize in Angular, TypeScript, HTML5, CSS3 and modern UI
development, creating fast and responsive user experiences. I have
also contributed to identifying and resolving web vulnerabilities
and follow modern web security standards and best practices.
</p>

</div>

</div>

</section>
 )
}

export default About