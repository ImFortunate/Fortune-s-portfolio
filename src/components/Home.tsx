import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import homeImg from "../../public/whatsapp-img (1).png";

const Home: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Frontend Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-0 py-20 px-6 md:py-[9rem] md:px-[4rem] mx-auto items-center max-w-7xl">
      {/* Text - full width on mobile, 2fr on desktop */}
      <div className="text-center md:text-left order-2 md:order-1">
        <h3 className="text-purple-900 font-bold text-xl md:text-3sm">
          Hi, It's Me
        </h3>
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold">
          Fortune Iwueze.
        </h1>
        <h3 className="text-xl md:text-1xl text-purple-900 mb-3">
          I'm a{" "}
          <span ref={typedRef} className="text-purple-900 font-bold"></span>
        </h3>
        <p className="max-w-2xl mx-auto md:mx-0 text-gray-700 leading-relaxed">
          Frontend Engineer focused on building reliable, user-centered
          products. Skilled in HTML, CSS, React, React Native, TypeScript,
          Golang, TailwindCSS, JavaScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a
            href="#contact"
            className="bg-purple-900 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-800 transition-colors font-medium"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border-2 border-purple-900 text-purple-900 px-8 py-3 rounded-lg hover:bg-purple-900 hover:text-white transition-colors font-medium"
          >
            My Projects
          </a>
        </div>
      </div>

      {/* Image - BIG on mobile only */}
      <div className="flex justify-center order-1 md:order-2">
        <img
          src={homeImg}
          alt="Fortune Iwueze"
          className="
            w-[82vw]          /* Big on mobile only */
            h-[82vw] 
            max-w-[380px]     /* Prevents it from being too big on small phones */
            max-h-[380px]
            md:w-96 md:h-96   /* Your original desktop size - unchanged! */
            rounded-full 
            object-cover 
            shadow-2xl 
            border-[10px] border-purple-100
          "
        />
      </div>
    </section>
  );
};

export default Home;
