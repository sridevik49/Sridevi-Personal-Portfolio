import "./About.scss"
import profileImg from "./Sri.jpeg";

function About() {
  return (
    <div className="about-container">
      <section className="about" id="About">
        <h2 className="section-title glow-text" data-aos="fade-down" data-aos-duration="1000">About Me</h2>
        
        <div className="about-content">
          <div className="left" data-aos="fade-right" data-aos-duration="1000">
             <div className="image-wrapper">
                <div className="image-box glass-panel">
                  <img src={profileImg} alt="Profile" />
                </div>
                <div className="glow-circle"></div>
             </div>
          </div>

          <div className="right" data-aos="fade-left" data-aos-duration="1000">
            <div className="text-box glass-panel">
              <p>
                I’m an enthusiastic Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces. With hands-on experience in React, JavaScript, and modern CSS, I enjoy turning ideas and designs into interactive digital experiences.
                <br /> <br />
                As a fresher, I’m constantly learning and exploring new technologies to improve my skills. I focus on writing clean code, understanding UI/UX principles, and creating web applications that are both functional and visually appealing.
                <br /> <br />
                I’m eager to grow, collaborate, and contribute to meaningful projects while continuously improving as a developer.
              </p>
            </div>
            
            <div className="stats">
              <div className="stat-card glass-panel" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <h3 className="glow-text">5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card glass-panel" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <h3 className="glow-text">100%</h3>
                <p>Responsive Designs</p>
              </div>
              <div className="stat-card glass-panel" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                <h3 className="glow-text">1+</h3>
                <p>Years Learning</p>
              </div>
              <div className="stat-card glass-panel" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
                <h3 className="glow-text">10+</h3>
                <p>Technologies Explored</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;