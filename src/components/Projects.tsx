import React from "react";
import studyBuddyImg from "../../public/image copy 2.png";
import webTechImg from "../../public/image.png";
import projectImg from "../../public/image copy.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title:
        '<span class="text-1g font-bold">Study</span><span class="text-1g font-bold text-purple-700">Buddy</span>',
      description:
        "Study buddy is a productivity web app designed to help students, self-learners, and professionals stay organized, motivated, and consistent while studying.",
      img: studyBuddyImg,
      link: "https://studybuddy-inky.vercel.app",
    },
    {
      title:
        '<span class="text-1g font-bold">Web</span><span class="text-1g font-bold text-purple-700">Tech</span>',

      description:
        "I built WebTech, a modern and responsive website using clean, maintainable code. It’s optimized for performance, user experience, and seamless functionality across all devices.",
      img: webTechImg,
      link: "https://webtech-theta-seven.vercel.app",
    },
    {
      title:
        '<span class="text-1g font-bold">Lorem</span><span class="text-1g font-bold text-purple-700">ipsum</span>',

      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad modi rem voluptate velit reprehenderit repellendus ex omnis excepturi.",
      img: projectImg,
      link: "https://lorem-sigma.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-20 bg-gray-50 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
        My<span className="text-purple-900">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={project.title.replace(/<[^>]+>/g, "")}
                className="w-full h-64 md:h-72 object-cover rounded-t-xl"
              />
            </a>
            <h3 className="text-2xl font-bold mt-4 mb-2">
              <span dangerouslySetInnerHTML={{ __html: project.title }}></span>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed px-6 mb-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
