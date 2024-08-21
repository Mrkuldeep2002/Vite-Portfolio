import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import React, { useState } from "react";

const projects = [
  {
    link: "https://quotesgenerator0024.netlify.app/",
    imageSrc: "project-1.png",
    title: "Quotes Generator",
    category: "Web development",
  },
  {
    link: "https://portfolioexample.netlify.app/",
    imageSrc: "project-2.png",
    title: "Rajashtan foundation",
    category: "Web development",
  },
  {
    link: "https://portfolioexample.netlify.app/",
    imageSrc: "project-3.png",
    title: "Products Gallery",
    category: "Web design",
  },
  {
    link: "https://portfolioexample.netlify.app/",
    imageSrc: "project-4.png",
    title: "Grocery",
    category: "Web development",
  },
  {
    link: "https://portfolioexample.netlify.app/",
    imageSrc: "project-5.png",
    title: "Furniture Hub",
    category: "Web Design",
  },
  {
    link: "https://portfolioexample.netlify.app/",
    imageSrc: "project-6.png",
    title: "Properties",
    category: "Web design",
  },
];

const filterTags = ["All","Web development", "Web design", ];

const Projects = ({ isActive }) => {
  const [tag, setTag] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
