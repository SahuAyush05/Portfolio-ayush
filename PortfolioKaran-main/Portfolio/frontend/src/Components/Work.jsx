import React, { useState, useEffect, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and external link



import "./Ds.css";
import Work2 from "./UI";
const items = [
  {
    id: 1,
    url: "https://ai-planet.vercel.app/",
    github: "https://github.com/SahuAyush05/AIplanet",
    title: "AI Planet",
    subtitle: "AI-Powered PDF Query System",
    description:
      "Developed an application that allows users to upload PDF files, convert them to vector data, and query using an AI chatbot.",
    images: [/* Add images for AI Planet */],
  },
  {
    id: 2,
    url: "https://griev-ease-ten.vercel.app/",
    github: "https://github.com/SahuAyush05/GrievEase",
    title: "GrievEase",
    subtitle: "Transparent Grievance Management Portal",
    description:
      "An intuitive platform that reduces complaint reporting time by over 50%, enhancing user engagement.",
    images: [/* Add images for GrievEase */],
  },
  {
    id: 3,
    url: "https://currency-converter-five.vercel.app/",
    github: "https://github.com/SahuAyush05/Currency_Converter",
    title: "Currency Converter",
    subtitle: "Convert currencies easily",
    description:
      "A user-friendly currency converter supporting over 190 countries, developed with React.",
    images: [/* Add images for Currency Converter */],
  },
  {
    id: 4,
    url: "https://placeholder.com",
    github: "https://github.com/SahuAyush05/hotstar_clone",
    title: "Hotstar Clone",
    subtitle: "Streaming Platform Replica",
    description:
      "Created a replica of the Hotstar streaming platform, showcasing videos and user interactivity.",
    images: [/* Add images for Hotstar Clone */],
  },
  {
    id: 5,
    url: "https://placeholder.com",
    github: "https://github.com/SahuAyush05/ExpenseTracker",
    title: "Expense Tracker",
    subtitle: "Manage Your Expenses",
    description:
      "A web application that helps users track their expenses and manage their finances effectively.",
    images: [/* Add images for Expense Tracker */],
  },
];


const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = items.reduce(
    (total, item) => total + item.images.length,
    0
  );
  let x = Math.random() * 30000;
  const containerRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, x);

    return () => clearInterval(timer);
  }, [selectedId, totalImages]); // Include totalImages in the dependency array

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalImages - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < totalImages - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const items = Array.from(container.children);
      const center = container.scrollLeft + container.offsetWidth / 2;

      items.forEach((item) => {
        const distanceFromCenter = Math.abs(
          item.offsetLeft + item.offsetWidth / 2 - center
        );
        const scale = Math.max(
          0.5,
          1 - Math.min(0.5, distanceFromCenter / 700)
        );
        item.style.transform = `scale(${scale})`;
      });
    };

    const container = containerRef.current;
    const items = Array.from(container.children);
    const center = container.scrollLeft + container.offsetWidth / 2;

    items.forEach((item) => {
      const distanceFromCenter = Math.abs(
        item.offsetLeft + item.offsetWidth / 2 - center
      );
      const scale = Math.max(
        0.5,
        1 - 2.2 * Math.min(0.5, distanceFromCenter / 1000)
      );
      item.style.transform = `scale(${scale})`;
    });

    containerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bbbbbbbbbbbb h-full z-40 w-screen bg-deep-purple">
      <Header />

      <h1 className="text-4xl mb-3 pt-24 flex items-center justify-center  text-center font-semibold ">
        Web Dev Projects
      </h1>
      <main
        style={{ height: "75vh", zIndex: 0 }}
        className=" mx-1 pt-24 h-full z-0 overflow-hidden"
      >
        <section className="mb-16  z-0 h-full overflow-y-auto">
          <style>
            {`
              ::-webkit-scrollbar {
                width: 0px; /* Safari and Chrome */
              }
              ::-webkit-scrollbar-thumb {
                background: transparent;
              }
            `}
          </style>

          <div
            ref={containerRef}
            className=" ml-3 flex overflow-x-scroll py-12 pl-96 mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="p-6 z-0 shadow-2xl hover:shadow-white/40 rounded-xl shadow-white/20 cursor-pointer transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                style={{ minWidth: "400px" }}
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0);
                }}
              >
                <img
                  src={item.images[currentImageIndex]}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out"
                />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="flex flex-col items-center gap-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-600 text-white rounded-full flex items-center gap-2 hover:bg-gray-500 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-500 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={24} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
                <h5 className="text-xl font-semibold mt-2">{item.subtitle}</h5>
                <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        {selectedId && (
          <div
            className={`fixed backdrop-blur-lg inset-0 bg-black/70  flex items-center justify-center z-50 ${
              selectedId ? "modal-fade-in" : "modal-fade-out"
            }`}
          >
            <article className="flex-col bg-white/20 backdrop:blur-2xl rounded-xl w-full 0 md:w-1/2 md:h-3/4 shadow-lg p-8 mx-auto">
              <img
                src={
                  items.find((item) => item.id === selectedId).images[
                    currentImageIndex
                  ]
                }
                alt={items.find((item) => item.id === selectedId).title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h5 className="text-xl font-semibold  mt-4">
                {items.find((item) => item.id === selectedId).subtitle}
              </h5>
              <h2 className="text-2xl font-bold mt-2">
                {items.find((item) => item.id === selectedId).title}
              </h2>
              <p className="mt-4">
                {items.find((item) => item.id === selectedId).description}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Next
                </button>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 absolute top-4 right-4"
              >
                Close
              </button>
            </article>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Work;
