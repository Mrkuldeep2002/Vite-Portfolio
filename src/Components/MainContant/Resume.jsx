import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import React from "react";

const Resume = ({ isActive }) => {
  const skills = [
    "React JS",
    "Next JS",
    "Vite JS",
    "Express JS",
    "Node JS",
    "MongoDB",
    "JavaScript",
    "Chakra UI",
    "Figma",
    "Bootstrap",
    "CSS",
    "HTML",
  ];
  return (
    <article className={`resume ${isActive ? "active" : ""}`}>
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <IonIcon className="block " icon={bookOutline} />
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Maharishi Arvind Institute of Science and Management
            </h4>

            <span>2020 — 2023</span>

            <p class="timeline-text">
              "I have completed Bachelor of Computer Applications (BCA) from
              Maharishi Arvind Institute of Science and Management."
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Amity University , Noida</h4>

            <span>2024 — 2026</span>

            <p class="timeline-text">
              "I am currently pursuing my Master of Computer Applications (MCA)
              from Amity University, Noida."
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <IonIcon className="block " icon={bookOutline} />
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Full-Stack Development </h4>

            <span>2023 — 2024</span>

            <p class="timeline-text">
              "I did Full-Stack Devlopment Certification course from Techno
              Globe in Jaipur."
            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card ">
          {skills.map((skill, index) => (
            <li  key={index} class="skills-item ">
              <div class="title-wrapper">
                <h5 class="h5">{skill}</h5>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
