import React from "react";
import "./Project.scss"
import MovieHub from "./MovieHub.png"
import InCosmetic from "./InCosmetic.png"
import ImageGallery from "./ImageGallery.png";
import ReactPlayer from "./ReactPlayer.png"
import Beauty from "./BeautyStudio.png"
import resumeImg from "./ResumeBuilder.png";


const projectData = [
  {
    title: "MovieHub",
    link: "https://moviehub-tmdb.netlify.app/",
    description: "A React JS movie discovery application that fetches real-time movie data from the TMDB API using Fetch API, enabling users to search movies, view details, and explore trending films dynamically.",
    image: MovieHub,
    tags: ["HTML", "CSS", "JavaScript", "React js"]
  },
  {
    title: "InCosmetic",
    link: "https://incosmetic.netlify.app/",
    description: "A React JS team project fetching real-time makeup products from the Makeup API, allowing users to filter and explore products dynamically with categories and search functionality.",
    image: InCosmetic,
    tags: ["HTML", "CSS", "JavaScript", "React js"]
  },
  {
    title: "Image Gallery",
    link: "https://photogallerybysri.netlify.app/",
    description: "A React JS photo gallery app that fetches real-time images from the Pixabay API using Fetch API, allowing users to search and explore high quality photos dynamically.",
    image: ImageGallery,
    tags: ["HTML", "CSS", "JavaScript", "React js"]
  },
  {
    title: "React Player",
    link: "https://react-player-by-sri.netlify.app/",
    description: "A video player application showcasing media playback integration gracefully with custom controls and a beautiful seamless UI.",
    image: ReactPlayer,
    tags: ["HTML", "CSS", "JavaScript", "React js"]
  },
  {
    title: "Tamil Beauty & Fashion Studio",
    link: "https://tamilfashionandbeautystudio.netlify.app/",
    description: "A responsive beauty and fashion services website built with HTML, CSS, and JS that showcases services and enables users to view, sort, and book appointments with ease.",
    image: Beauty,
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Online Resume Builder",
    link: "https://onlineresumecvbuilder.netlify.app/",
    description: "A real-time resume builder built using HTML, CSS, and JavaScript allowing users to create and download resumes instantly.",
    image: resumeImg,
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <section id="Projects" className="projects">
        <h2 className="section-title glow-text" data-aos="fade-down" data-aos-duration="1000">Projects</h2>

        <div className="project-grid">
          {projectData.map((project, index) => (
            <div 
              className="project-card glass-panel" 
              key={index}
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay={index * 150}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary overlay-btn">
                    View Live
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="glow-text">
                    {project.title}
                  </a>
                </h3>

                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;