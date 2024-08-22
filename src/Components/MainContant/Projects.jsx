import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";

const projects = [
  {
    link: "https://trendslyfe.netlify.app/",
    imageSrc: "project-1.png",
    title: "E-Commerce Site",
    category: "Web development",
  },
  {
    link: "https://1digital-clock.netlify.app",
    imageSrc: "project-2.png",
    title: "Digital Clock",
    category: "Web development",
  },
  {
    link: "https://3dbuilding.netlify.app",
    imageSrc: "project-3.png",
    title: "3D Building",
    category: "Web design",
  },
  {
    link: "https://check-wheather.netlify.app",
    imageSrc: "project-4.png",
    title: "Wheather App",
    category: "Web development",
  },
  {
    link: "https://practice-grocery-ecomm.netlify.app",
    imageSrc: "project-5.png",
    title: "Grocery Website",
    category: "Web Design",
  },
  {
    link: "https://dice-rollling-game.netlify.app",
    imageSrc: "project-6.png",
    title: "Dice Game",
    category: "Game",
  },
  {
    link: "https://simplecyrpto-dashboard.netlify.app",
    imageSrc: "project-7.png",
    title: "Cyrpto Dashboard",
    category: "Web design",
  },
  {
    link: "https://ikkatbag.netlify.app",
    imageSrc: "project-8.png",
    title: "Ikkat Bag",
    category: "Web design",
  },
  {
    link: "https://gamerockscissorpaper.netlify.app",
    imageSrc: "project-9.png",
    title: "Rock Paper Scissor Game",
    category: "Game",
  },
];

const filterTags = ["All","Web development", "Web design","Game" ];

const Projects = ({ isActive }) => {
  const [tag, setTag] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTag("All");
    }
  }, [isActive]);

  
  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (value) => {
    setTag(value);
    setIsDropdownOpen(false);
  };

  const filteredProjects =
    tag === "All"
      ? projects
      : projects.filter((project) => project.category === tag);

  return (
    <article className={`portfolio ${isActive ? "active" : ""}`}>
      <header>
        <h2 class="h2 article-title">Projects</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          {filterTags.map((filter) => (
            <li key={filter} className="filter-item">
              <button
                className={`${tag === filter ? "active" : ""}`}
                onClick={() => setTag(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" onClick={handleButtonClick}>
            <div className="select-value">{tag}</div>
            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>

          {isDropdownOpen && (
            <ul className="select-list">
              {filterTags.map((filter) => (
                <li key={filter} className="select-item">
                  <button onClick={() => handleItemClick(filter)}>
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul class="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                {/* <p className="project-category">{project.category}</p> */}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;
