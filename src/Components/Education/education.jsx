import "./education.scss"
import { FaGraduationCap } from "react-icons/fa";

function Education(){
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Government Arts & Science College for Women",
      year: "2022 – 2025",
      score: "CGPA: 7.3/10",
      location: "Dharmapuri, Tamilnadu"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Higher Secondary School",
      year: "2020 – 2022",
      score: "70%",
      location: "Adhagapadi, Dharmapuri"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Government Higher Secondary School",
      year: "2019 – 2020",
      score: "75%",
      location: "Adhagapadi, Dharmapuri"
    }
  ];

  return (
    <div className="education-container-wrapper">
      <section id="Education" className="edu-section">
        <h2 className="section-title glow-text" data-aos="fade-down" data-aos-duration="1000">Education</h2>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div 
              className="edu-card glass-panel" 
              key={index}
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-content">
                <h3 className="glow-text">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <div className="edu-details">
                  <span className="year">{edu.year}</span>
                  <span className="dot">•</span>
                  <span className="score">{edu.score}</span>
                </div>
                <p className="location">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Education;