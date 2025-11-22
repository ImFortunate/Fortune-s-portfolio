import React from "react";

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 px-6 md:px-20 max-w-[130rem] mx-auto text-center transition-opacity duration-1000 opacity-0 translate-y-10 animate-fadeIn"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      About <span className="text-purple-900">Me</span>
    </h2>
    <p className=" text-lg md:text-3sm leading-8 text-gray-700">
      Fortune is a Front-End Developer and Software Engineer (Golang) who
      specializes in turning ideas, experiences, and everyday inspirations into
      real-life projects that people can actually use. I enjoy building clean,
      responsive, and user-focused interfaces, and I’m passionate about bringing
      projects to life from just an idea. I’ve built at least 3 projects that
      sharpened my skills and creativity. Development is not just writing code
      but creating something simple, useful, and impactful. I’m always open to
      collaborating on exciting projects and exploring new opportunities. In my
      work, I focus on creating intuitive and accessible web applications that
      solve real problems for users while maintaining high standards of design
      and code quality. I have experience working with modern technologies such
      as React, TypeScript, TailwindCSS, JavaScript, and Golang, allowing me to
      craft solutions that are both functional and visually appealing. I am
      deeply interested in continuous learning, keeping up with the latest
      trends and best practices in web development and software engineering.
      Beyond building projects, I enjoy sharing knowledge with peers,
      participating in collaborative coding challenges, and contributing to
      open-source initiatives whenever possible. I am always excited to connect
      with like-minded professionals, discuss innovative ideas, and contribute
      to projects that challenge my skills while providing value to the
      community.
    </p>
  </section>
);

export default About;
