import "./Home.scss"
import profileImg from "./Sri.jpeg";
import Resume from "./SRIDEVI K Resume.pdf"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="Home" id="Home">
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
          <div className="image-wrapper">
            <div className="image-box glass-panel">
              <img src={profileImg} alt="Profile" />
            </div>
            <div className="glow-circle"></div>
          </div>
        </div>

        <div className="right" data-aos="fade-left" data-aos-duration="1000">
          <h1>Hey I'm <span className="glow-text">SRIDEVI K</span></h1>
          <h2>
            I am a <span className="highlight glow-text">Frontend Developer</span>
          </h2>

          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="description">
            I enjoy building clean and modern web interfaces. I focus on responsive layouts, smooth interactions, and user-friendly designs. I love turning ideas into visually appealing digital experiences. My goal is to create websites that are fast, functional, and enjoyable to use.
          </p>

          <div className="btn-group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href={Resume} target="_blank" rel="noreferrer" className="btn-primary">
              View Resume
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="social-icons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <a href="https://github.com/sridevik49" target="_blank" rel="noreferrer" className="icon-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sridevi-k-86b7a630b/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:sridevik1909@gmail.com" target="_blank" rel="noreferrer" className="icon-link">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;