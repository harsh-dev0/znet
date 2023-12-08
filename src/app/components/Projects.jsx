"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shiva Jewellers Website",
    description: "A website that shows available products and their description in Shiva Jewellers. Website is developed in such a way that it can be used for e-commerce in future with features like cart functionality. This project uses MERN stack to create a very immersive product display experience.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/harshpa324/ShivaJ",
    previewUrl: "https://shivajewellers.netlify.app/",
  },
  {
    id: 2,
    title: "Genshin Impact API",
    description: "An unofficial API for game genshin-impact,offering comprehensive data pertaining to characters, weapons, and their ascension materials.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/devesh-anand/genshin-api",
    previewUrl: "https://genshin-impact.up.railway.app/",
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description: "My personal site.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/harshpa324/znet",
    previewUrl: "/",
  },
  // Will Add more projects
];

const ProjectsSection = () => {

  const projectsRef = useRef(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" mt-4" >
      <section id="projects"  >
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsSection;
