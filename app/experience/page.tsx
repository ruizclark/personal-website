"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Experience() {
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
          className="relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary-600 rounded-full"></div>
          <h1 className="mb-8 text-center text-white">Experience</h1>

          <div className="mb-12 text-center">
            <Link href="/assets/resume.pdf" target="_blank" className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-primary-600">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <span className="inline-block w-8 h-8 bg-primary-600 rounded-full mr-3 flex-shrink-0"></span>
                  Education
                </h2>

                <div className="mb-8 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <h3 className="mb-1">Harvard University</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Doctorate in Education Leadership (Expected: 2026)
                  </p>
                </div>

                <div className="mb-8 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <h3 className="mb-1">Columbia University</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Master's in International Educational Development (2010)
                  </p>
                </div>

                <div className="mb-8 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <h3 className="mb-1">Pepperdine University</h3>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Bachelor's in International Studies with Minors in Spanish & French (2006)
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Work Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-secondary-500">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <span className="inline-block w-8 h-8 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></span>
                  Work Experience
                </h2>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Doctoral Candidate in Education Leadership (EdLD)</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Aug 2023 - Present
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Harvard University, Cambridge, MA
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                    <li>
                      Built VERIVOX (www.verivox.pro), an online platform to amplify the voices of the EdLD community
                    </li>
                    <li>
                      Received three innovation awards from the Harvard Graduate School of Education (HGSE) to launch
                      Qüento (www.quento.ai), and AI-powered platform that synthesizes qualitative feedback from
                      students
                    </li>
                    <li>
                      Co-authored an AI Implementation Guide for Prince George's County Public Schools (www.ai-ed.info)
                    </li>
                    <li>
                      Developed an AI Equity Coach for the Public Schools of Brookline through a Superintendent
                      Fellowship
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Interim & Deputy Chief Executive Officer</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Aug 2019 - July 2023
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Teach For Armenia, Yerevan, Armenia
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                    <li>
                      Developed Change-Based Learning & accelerator program, which incubated 300+ Student-Led Projects
                    </li>
                    <li>
                      Launched a wartime Emergency Education Response, reaching 1 out of every 13 displaced students
                    </li>
                    <li>
                      Devised the organization's COVID-19 response, procuring $2+ million towards the purchase of
                      technology
                    </li>
                    <li>
                      Oversaw expansion of program to all regions in Armenia while doubling the size of the teaching
                      cohort within a period of one year, therefore increasing the number of students reached from
                      15,000 to 34,000
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Managing Director, Leadership Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      July 2016 - July 2019
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Teach For America, Denver, CO
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                    <li>
                      Led efforts to transform cohort culture for a region supporting 115 Teacher-Leaders & 1,500+
                      Alumni, moving Colorado from the bottom 5 sites in the nation to the top quartile
                    </li>
                    <li>
                      Achieved the highest participant satisfaction ever recorded in the region's 10-year history,
                      surpassing the National Breakthrough Results 2 years ahead of schedule
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-accent-400">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <span className="inline-block w-8 h-8 bg-accent-400 rounded-full mr-3 flex-shrink-0"></span>
                  Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-beige-300/10 p-6 rounded-lg">
                    <h3 className="mb-4 flex items-center">
                      <span className="w-3 h-3 bg-primary-600 rounded-full mr-2"></span>
                      Technical Skills
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                      <li>Familiar with Python, JavaScript (including Next.js & React), SQL, HTML, & CSS</li>
                      <li>Microsoft Office Suite, QuarkXPress, Salesforce, Adobe Photoshop, & Illustrator</li>
                      <li>80 WPM typing speed</li>
                    </ul>
                  </div>

                  <div className="bg-accent-400/10 p-6 rounded-lg">
                    <h3 className="mb-4 flex items-center">
                      <span className="w-3 h-3 bg-secondary-500 rounded-full mr-2"></span>
                      Languages
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                      <li>English & Spanish (Native)</li>
                      <li>French (Proficient)</li>
                      <li>Armenian (Intermediate)</li>
                      <li>Italian (Beginner)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Certificates Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-beige-300">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center">
                  <span className="inline-block w-8 h-8 bg-beige-300 rounded-full mr-3 flex-shrink-0"></span>
                  Certificates
                </h2>

                <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
                  <li>Relay Graduate School of Education, AI Prompt Engineering Microcredential (2024)</li>
                  <li>University of Denver, Trilogy Web Development Certificate (2018)</li>
                </ul>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
