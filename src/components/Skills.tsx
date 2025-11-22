import React from "react";

const skills = [
  { name: "HTML & CSS", percent: 98, color: "bg-purple-900" },
  { name: "React", percent: 80, color: "bg-sky-400" },
  { name: "TypeScript", percent: 60, color: "bg-blue-600" },
  { name: "TailwindCSS", percent: 80, color: "bg-cyan-500" },
  { name: "React Native", percent: 60, color: "bg-sky-400" },
  { name: "JavaScript", percent: 70, color: "bg-yellow-400" },
  { name: "GoLang", percent: 40, color: "bg-cyan-500" },
];

const Skills: React.FC = () => (
  <section className="py-20 px-6 md:px-20 max-w-[130rem] mx-auto bg-gray-50">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
      My <span className="text-purple-900">Skills</span>
    </h2>

    <div className="space-y-8 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name}>
          {/* Skill name and percentage */}
          <div className="flex justify-between mb-2">
            <h3 className="text-xl md:text-2xl font-semibold">{skill.name}</h3>
            <span className="text-sm md:text-base font-medium">
              {skill.percent}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-5 bg-gray-300 rounded-full overflow-hidden">
            <div
              className={`${skill.color} h-5 rounded-full transition-all duration-1000`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
