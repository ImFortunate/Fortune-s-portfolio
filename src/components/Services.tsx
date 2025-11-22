import React from "react";
import webDesignImg from "../../public/web-design.png";

const Services: React.FC = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "I create visually appealing and user-friendly designs that enhance the user experience.",
      img: webDesignImg,
    },
    {
      title: "Web Development",
      description:
        "I build responsive and interactive websites using HTML, CSS, and JavaScript.",
      img: webDesignImg,
    },
    {
      title: "Mobile-App Development",
      description:
        "I build high-quality, custom mobile applications and plugins, delivering solutions designed to drive results and exceed client expectations.",
      img: webDesignImg,
    },
  ];

  return (
    <section id="services" className="py-28 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        My <span className="text-purple-900">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 flex flex-col items-center text-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-14 h-14 mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
