import "../styles/sections.css"

function Contact(){

return(

<section id="contact">

<h2 className="section-title">Get In Touch</h2>

<div className="contact-container">

{/* LEFT SIDE */}

<div className="contact-info">

<h3>Let's work together</h3>

<p>
I'm always interested in new opportunities, collaborations,
or freelance projects. Feel free to reach out.
</p>

<div className="contact-item">
📧 nencypatel353@gmail.com
</div>

<div className="contact-item">
📞 +91 9510019323
</div>

<div className="contact-item">
📍 Vapi (Gujarat), India
</div>

<div className="contact-links">
<a href="https://www.linkedin.com/in/nency-patel-16b476245/" target="_blank" rel="noopener noreferrer">
LinkedIn
</a>

<a href="https://github.com/Nencypatel353" target="_blank" rel="noopener noreferrer">
GitHub
</a>
</div>

</div>

{/* RIGHT SIDE */}

<form className="contact-form">

<input type="text" placeholder="Your Name" required />

<input type="email" placeholder="Your Email" required />

<textarea placeholder="Your Message" required></textarea>

<button type="submit">Send Message</button>

</form>

</div>

</section>

)

}

export default Contact