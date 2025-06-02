import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-8"> {/* Increased pb and added pt for spacing */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold text-white" // Added font-bold and text-white for contrast
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 p-4"
            >
              <img
                src={project.image}
                height={150}
                width={150}
                alt={project.title}
                className="mb-6 rounded object-cover w-full max-w-[150px] h-auto"
              />
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4 p-4 bg-neutral-800 rounded-lg shadow-lg">
              <h6 className="mb-2 text-2xl font-semibold text-purple-400">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded bg-neutral-700 text-sm font-medium text-purple-300 hover:bg-neutral-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;