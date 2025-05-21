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

            {/* Work Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-secondary-500">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center text-primary-600">
                  Experience
                </h2>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Doctoral Candidate</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Aug 2023 - Present
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Harvard University, Cambridge, MA
                  </p>
                  {/* 
                  <p className="text-base mb-8 text-left">
                    Through the Doctorate in Education Leadership (EdLD) program at the Harvard Graduate School of Education (HGSE), I secured three innovation awards in order to launch Qüento, an AI-powered platform that aims to elevate the voices of students and their communities. Additionally, I built VERIVOX (an online platform to showcase the work of the EdLD community), co-authored an AI Implementation Guide for Prince George’s County Public Schools, and trained an AI Equity Coach for the Public Schools of Brookline. Given my background, I was invited to join the AI Task Force of the Massachusetts Department of Elementary and Secondary Education.
                  </p>
                  */}
                  <p className="text-base mb-8 text-left">
                    Through the Doctorate in Education Leadership (EdLD) program at the Harvard Graduate School of Education (HGSE), I secured three innovation awards in order to launch Qüento, an AI-powered platform that aims to elevate the voices of students and their communities. Additionally, I co-authored an AI Implementation Guide for Prince George’s County Public Schools, and trained an AI Equity Coach for the Public Schools of Brookline. Given my background, I was invited to join the AI Task Force of the Massachusetts Department of Elementary and Secondary Education.
                  </p>
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
                  <p className="text-base mb-8 text-left">
                    During my tenure at Teach For Armenia, I secured more than $24 million, providing the organization with the resources to double its cohort size and reach 30,000 students across 10% of the country’s public schools. As the organization expanded, I led efforts to improve staff culture, taking Teach For Armenia to the #1 spot in an international survey conducted by Boston Consulting Group. Amid the pandemic, I oversaw the launch of a COVID-19 response through which we procured $2.5 million in technology. Under my leadership during the 2020 Artsakh War, we mobilized an emergency response that reached one out of every thirteen displaced students.
                  </p>
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
                  <p className="text-base mb-8 text-left">
                    At Teach For America Colorado, I oversaw efforts to transform cohort culture for the Denver region—supporting 115 teacher leaders and over 1,500 alumni—moving the site from one of the bottom five in the nation to the top quartile. My team achieved the highest participant satisfaction ever recorded in the region’s 10-year history, surpassing the national goals two years ahead of schedule.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Lead Program Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Nov 2014 – June 2016
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    LeapEd, Kuala Lumpur, Malaysia
                  </p>
                  <p className="text-base mb-8 text-left">
                    At LeapEd, I designed a three-year talent pipeline program for rising school transformation advisors and coached a team of ten Associate Education Partners to achieve 100% of their key performance targets in 2015, with a growth rate of 174% in pedagogical practice alone. The competency framework that I developed for my program was then adopted by the organization to support 200 school-based staff members.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Associate Program Director</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Sept 2012 – Oct 2014
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Teach For Malaysia, Kuala Lumpur, Malaysia
                  </p>
                  <p className="text-base mb-8 text-left">
                    As Associate Director at Teach For Malaysia, I oversaw the development of the organization’s teacher preparation program. Under my direction, 97% of teachers accomplished 100% of their professional development targets during the intensive pre-service training institute. While launching the new Research, Design, and Impact department, I stewarded the creation of national student metrics to gauge learning for 13,000 students, including a literacy pilot that added 2.5 months of writing gains. Finally, I spearheaded a national conference that drew 424 attendees and achieved a net promoter score of 98.                  
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Program Manager</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Aug 2010 – June 2012
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Teach For India, Pune, India
                  </p>
                  <p className="text-base mb-8 text-left">
                    In India, I supported 45 teachers who reached over 1,200 students. During the 2011–2012 school year, my team delivered twice the typical annual reading gains. I launched a school transformation initiative that secured ₹1.5 million to expand the program and created a student scholarship in collaboration with a Columbia University society. To bolster professional development, I also built an online library of more than 100 instructional best-practice videos.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0">Spanish Teacher</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-sm">
                      Aug 2006 – June 2008
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Nānākuli High & Intermediate School, Nānākuli, HI
                  </p>
                  <p className="text-base mb-8 text-left">
                    While teaching at a Native Hawaiian homestead, I led 88 new language learners to write page-length essays in Spanish with an average mastery rate of 83%. I also founded an honors society, established a college scholarship, and launched a summer travel program. During the 2007-2008 school year, I received a "Teacher of the Year" award.                 
                  </p>
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
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center text-primary-600">
                  Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-beige-300/10 p-6 rounded-lg">
                    <h3 className="mb-4 flex items-center">
                      Programming Skills
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                      <li>Familiar with C, Python, JavaScript (including v0 by Next.js & React), SQL, HTML, & CSS</li>
                    </ul>
                  </div>

                  <div className="bg-accent-400/10 p-6 rounded-lg">
                    <h3 className="mb-4 flex items-center">
                      Languages
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-base md:text-lg leading-relaxed">
                      <li>English & Spanish (Native)</li>
                      <li>French (Proficient)</li>
                      <li>Armenian (Intermediate)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-primary-600">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center text-primary-600">
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

            {/* Certificates Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-beige-300">
                <h2 className="mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center text-primary-600">
                  Certificates
                </h2>

                <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
                  <li>Relay Graduate School of Education, AI Prompt Engineering Microcredential (2024)</li>
                  <li>University of Denver, Trilogy Web Development Certificate (2018)</li>
                  <li>Univesity of Hawai'i, Post-Baccalaureate Certificate in Secondary Education (2008)</li>
                </ul>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
