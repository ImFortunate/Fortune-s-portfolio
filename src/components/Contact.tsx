import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contactImg from "../../public/purpleee.jpg";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_g3iqejm",
        "template_bbn5bo6",
        form.current,
        "MNBY_wcxqbk539RAd"
      )
      .then(
        () => alert("Message sent!"),
        () => alert("Failed to send message.")
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 max-w-[130rem] mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        Contact <span className="text-purple-900">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={contactImg}
          alt="Contact"
          className="w-full h-96 md:h-[35rem] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border border-purple-900 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-900"
            required
          />
          <input
            type="tel"
            placeholder="Your Number"
            className="border border-purple-900 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-purple-900 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-900"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-purple-900 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-900"
            rows={6}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-900 text-white px-6 py-3 rounded font-semibold hover:bg-purple-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
