import React from "react";

const AboutMe = ({ isActive }) => {

  const clients = [
    { src: 'react.png', title: 'ReactJS' },
    { src: 'next.png', title: 'NextJS' },
    { src: 'nodejs1.png', title: 'NodeJS' },
    { src: 'vite.png', title: 'ViteJS' },
    { src: 'chakra-ui.png', title: 'ChakraUI' },
    { src: 'Express.png', title: 'ExpressJS' },
    { src: 'Figma.png', title: 'Figma' },
    { src: 'mongo.png', title: 'MongoDB' },
    { src: 'java.png', title: 'JAVA' },
    { src: 'c++.png', title: 'C++' },
    { src: 'bootstrap.png', title: 'BootStrap' },
    { src: 'javascript.png', title: 'JavaScript' },
    { src: 'css-3.png', title: 'CSS' },
    { src: 'html.png', title: 'HTML' },

  ];

  return (
    <article className={`about ${isActive ? "active" : ""}`}>
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Vite, Next, Node.js, Express, MongoDB,
          HTML,CSS, and Git.
        </p>

        <p>
          I am a quick learner and I am always looking to expand my knowledge
          and skill set. I am a team player and I am excited to work with others
          to create amazing applications.
        </p>
      </section>

      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img src="icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                Professional development to build dynamic and effective
                websites.
              </p>
            </div>
          </li>
          {/* 
         <li class="service-item">

          <div class="service-icon-box">
            <img src="icon-app.svg" alt="mobile app icon" width="40"/>
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Mobile apps</h4>

            <p class="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>

        </li> */}

          <li class="service-item">
            <div class="service-icon-box">
              <img
                src="icon-design.svg
            "
                alt="design icon"
                width="40"
              />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web design</h4>

              <p class="service-item-text">
                Creating visually stunning and user-friendly web designs
                tailored to your needs.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section class="clients">
        <h3 class="h3 clients-title">Skills</h3>

        <ul class="clients-list has-scrollbar">
            {clients.map((client)=>(
              <li class="clients-item">
              <a href="#">
                <div class="image-wrapper">
                  <img src={client.src} title="" alt="client logo" />
                  <div class="tooltip">{client.title}</div>
                </div>
              </a>
            </li>
            ))}
        </ul>
      </section>
    </article>
  );
};

export default AboutMe;
