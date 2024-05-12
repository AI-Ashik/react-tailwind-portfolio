"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Porfolio Project",
    description: "Project 1 description",
    image: "/images/projects/portfolioW.png",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Agency Project Wordpress",
    description: "Project 2 description",
    image: "/images/projects/cdsW.png",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Agency Project Wordpress",
    description: "Project 2 description",
    image: "/images/projects/cdsW.png",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Agency Project Wordpress",
    description: "Project 2 description",
    image: "/images/projects/cdsW.png",
    tag: ["All", "Wordpress"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, seTag] = useState("All");

  const handleTagChange = (newTag) => {
    seTag(newTag);
  };

  const filtedredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2>My Projects</h2>
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
          name="Wordpress"
          isSelected={tag === "Wordpress"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtedredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
