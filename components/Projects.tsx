/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-4 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, index) => (
          <div key={index} className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <a href={project?.linkToBuild} target="_blank" rel="noreferrer">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{once: true}}
                src={urlFor(project?.image).url()}
                alt={project?.title + '-logo'}
                className="md:w-[45%] md:h-[80%] md:mx-auto"
              />
            </a>

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0B]/50">Case study {index + 1} of {projects.length}:</span>&nbsp;
                <span>{project?.title}</span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech, index) => (
                  <img className="h-10 w-10" key={index} src={urlFor(tech?.image).url()}/>
                ))}
              </div>

              <p className="text-lg text-center md:text-left bottom-8">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects