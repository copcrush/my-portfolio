"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio Website by using React (Next.js)",
    image: "/images/projects/portfolio-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/copcrush-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Forecasty Weather App",
    description: "Forecasty Weather App by using React.js this project will show the daily weather, current weather and hourly forecast weather every 3 hours and You can select date for Daily forecast for 5 Days.",
    image: "/images/projects/forecasty-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/forecasty-weather-app.git",
    previewUrl: "https://forecasty-weather.netlify.app/",
  },
  {
    id: 3,
    title: "Pokedex App",
    description:
      'Pokedex App by using React.js If you want to see my code you should open with "npm run dev" cause of the website host has blocked to show it.',
    image: "/images/projects/pokedex-project.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/copcrush/pokedex-app.git",
    previewUrl: "http://localhost:5173/",
  },
  {
    id: 4,
    title: "Chew Blogs Full Stack App",
    description: "Chew Blogs is a full-stack bootcamp project music blog so you can create data for the music blog and choose the category for the content.",
    image: "/images/projects/blog-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/copcrush/chewblogs.git",
    previewUrl: "http://localhost:5173/",
  },
  {
    id: 5,
    title: "To do List",
    description: "To do list is my first Vue.js Project so I've learned how to use Vue.js for comparing with React",
    image: "/images/projects/todolist-project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/copcrush/todolist.git",
    previewUrl: "https://todolistforreal.netlify.app/",
  },
  {
    id: 6,
    title: "Coming Soon Project",
    description:
      "Coming Soon",
    image: "/images/projects/inprogress.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
