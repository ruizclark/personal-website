"use client"

import { motion } from "framer-motion"
import Carousel from "@/components/Carousel"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Qüento",
    description:
      "An AI-powered platform that synthesizes qualitative feedback from students, helping educators gain deeper insights into student experiences and needs.",
    image: "quento.png",
    link: "https://www.quento.ai",
  },
  {
    id: 2,
    title: "VERIVOX",
    description:
      "An online platform designed to amplify the voices of the EdLD community, fostering collaboration and knowledge sharing among educational leaders.",
    image: "verivox.png",
    link: "https://www.verivox.pro",
  },
  {
    id: 3,
    title: "AI Implementation Guide",
    description:
      "A comprehensive resource for educators and school administrators on ethically implementing AI technologies in educational settings.",
    image: "guide.png",
    link: "https://www.ai-ed.info",
  },
  {
    id: 4,
    title: "Prishtalina",
    description:
      "A children's book that explores themes of identity, diversity, and cultural understanding through engaging storytelling and beautiful illustrations.",
    image: "prishtalina.png",
    link: "https://zangakbookstore.am/en/prshtalina",
  },
]

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/profile.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary-600 rounded-full"></div>
          <h1 className="mb-8 text-center text-white">Projects</h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto text-white"
          >
            Here are some of the key projects I've worked on throughout my career. Each represents my commitment to
            leveraging technology for educational advancement and social impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border-t-4 border-primary-600"
          >
            <Carousel projects={projects} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-l-4 border-secondary-500">
              <h2 className="mb-6 flex items-center justify-center">
                <span className="inline-block w-8 h-8 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></span>
                Interested in Collaboration?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                I'm always looking for new opportunities to work on impactful projects. If you have an idea or project
                that aligns with my expertise and values, I'd love to hear from you.
              </p>
              <a href="/contact" className="btn-primary relative overflow-hidden group inline-block">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
