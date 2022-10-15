/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] xl:w-[500px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-x-hidden top-[20%] md:mt-[50px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="w-14 h-14 rounded-full xl:w-[128px] xl:h-[128px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company + '-logo'}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-1xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech, index) => (
            <img key={index} className="w-10 h-10 rounded-full" src={urlFor(tech.image).url()} alt="" />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toLocaleDateString()} - {experience.isCurrentWorkingHere ? 'Present' : new Date(experience.dateEnded).toLocaleDateString()}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-36 overflow-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0B]/80">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard