import "./Skills.scss";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaJava, FaDatabase, FaServer } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact />, percent: 70, color: "#61dafb" },
    { name: "JavaScript", icon: <SiJavascript />, percent: 80, color: "#f7df1e" },
    { name: "HTML5", icon: <FaHtml5 />, percent: 88, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, percent: 80, color: "#1572b6" },
    { name: "Sass", icon: <FaSass/>, percent: 65, color: "#cc6699" },
    { name: "Java", icon: <FaJava />, percent: 69, color: "#f89820" },
    { name: "JDBC", icon: <FaServer/>, percent: 58, color: "#007396"},
    { name: "MySQL", icon: <FaDatabase />, percent: 70, color: "#4479a1" },
  ];

  return (
    <div className="skills-container-wrapper">
      <section id="Skills">
        <h2 className="section-title glow-text" data-aos="fade-down" data-aos-duration="1000">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              className="skill-card glass-panel" 
              key={index} 
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay={index * 100}
            >
              <div 
                className="skill-icon" 
                style={{ 
                  color: skill.color,
                  filter: `drop-shadow(0 0 10px ${skill.color}80)` 
                }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <div className="progress-bar-container">
                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.percent}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`
                  }}
                ></div>
              </div>

              <span className="percent-text">{skill.percent}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;