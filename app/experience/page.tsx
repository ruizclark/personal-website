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
          <h1 className="mb-8 text-center text-white text-3xl md:text-4xl">
            Experience
          </h1>

          {/* Download Resume button */}
          <div className="mb-12 text-center">
            <Link
              href="/assets/resume.pdf"
              target="_blank"
              className="btn-primary relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <span className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          </div>

          {/* Slightly smaller global font size */}
          <div className="max-w-4xl mx-auto text-[0.92rem] md:text-[0.97rem] leading-relaxed">

            {/* ================= PROFESSIONAL SUMMARY ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-primary-600">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Professional Summary
                </h2>
                <p>
                  Innovator and executive leader at the intersection of artificial intelligence, venture creation, and social impact in education. At Harvard, piloted an AI data-wrangling tool, built a full-stack web application to support knowledge-sharing, trained an AI Equity Coach for district use, and co-authored an AI Implementation Guide for system-level adoption. As an Interim CEO, secured $26.5 million in funding and doubled organizational size. Passionate about leveraging AI to drive scalable and equitable solutions for the public good.
                </p>
              </div>
            </motion.section>

            {/* ================= PROFESSIONAL EXPERIENCE (ALL ROLES) ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-secondary-500">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Professional Experience
                </h2>

                {/* VERIVOX */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Founder</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Sep 2025 – Present
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    VERIVOX (Remote)
                  </p>
                  <p>
                    At Harvard University, I founded VERIVOX, a platform designed to spotlight the work and impact of Harvard’s Education Leadership Doctorate (EdLD) community. I led the product vision, UX design, and full-stack engineering from concept to launch—building the platform using Next.js, Supabase, Tailwind CSS, and Vercel’s v0. The platform provides practitioners the space to exchange insights across the field of education leadership.
                  </p>
                </div>

                {/* Digital Promise */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">
                      Innovation &amp; Advancement Advisor (Doctoral Resident)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Jul 2025 – Present
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Digital Promise (Remote)
                  </p>
                  <p>
                    At Digital Promise, I led the launch of an AI capacity-building project for Fresno Unified School District’s executive cabinet, achieving a 100% satisfaction rating and 91% of leaders reporting that they would recommend the program to other districts. My work with Fresno is a part of a broader strategy to develop a fee-for-service model that will allow for scale as the organization strives to reach 30 million learners. In parallel, I am supporting the design of an organization-wide AI Workforce Development Strategy.
                  </p>
                </div>

                {/* Friends of Teach For Armenia */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Executive Advisor</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Aug 2023 – Present
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Friends of Teach For Armenia (Remote)
                  </p>
                  <p>
                    As Executive Advisor to Friends of Teach For Armenia, I strengthened the organization’s global visibility through research-driven storytelling and university partnerships. I forged a collaboration with UCLA that resulted in a study highlighting Teach For Armenia educators’ excellence in promoting student leadership and social-emotional learning, and I organized a panel series at Harvard, Princeton, and UCLA examining the organization’s support for students displaced by conflict. During this time, I also wrote <em>Prshtalina</em>, a children’s book that addresses bullying and celebrates women in leadership.
                  </p>
                </div>

                {/* Teach For Armenia */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">
                      Interim &amp; Deputy Chief Executive Officer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Aug 2019 – July 2023
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Teach For Armenia, Yerevan, Armenia
                  </p>
                  <p>
                    During my tenure at Teach For Armenia, I wrote a grant application worth $24 million, providing the organization with the resources to double its cohort size and reach 30,000 students across 10% of the country’s public schools. As the organization expanded, I led efforts to improve staff culture, taking Teach For Armenia to the #1 spot in an international survey conducted by Boston Consulting Group. Amid the pandemic, I oversaw the launch of a COVID-19 response through which we procured $2.5 million in technology. Under my leadership during the 2020 Artsakh War, we mobilized an emergency response that reached one out of every thirteen displaced students.
                  </p>
                </div>

                {/* Teach For America */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">
                      Managing Director, Leadership Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      July 2016 – July 2019
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Teach For America, Denver, CO
                  </p>
                  <p>
                    At Teach For America Colorado, I oversaw efforts to transform cohort culture for the Denver region—supporting 115 teacher leaders and over 1,500 alumni—moving the site from one of the bottom five in the nation to the top quartile. My team achieved the highest participant satisfaction ever recorded in the region’s 10-year history, surpassing the national goals two years ahead of schedule.
                  </p>
                </div>

                {/* LeapEd */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Lead Program Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Nov 2014 – June 2016
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    LeapEd, Kuala Lumpur, Malaysia
                  </p>
                  <p>
                    At LeapEd, I designed a three-year talent pipeline program for rising school transformation advisors and coached a team of ten Associate Education Partners to achieve 100% of their key performance targets in 2015, with a growth rate of 174% in pedagogical practice alone. The competency framework that I developed for my program was then adopted by the organization to support 200 school-based staff members.
                  </p>
                </div>

                {/* Teach For Malaysia */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Associate Program Director</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Sept 2012 – Oct 2014
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Teach For Malaysia, Kuala Lumpur, Malaysia
                  </p>
                  <p>
                    As Associate Director at Teach For Malaysia, I oversaw the development of the organization’s teacher preparation program. Under my direction, 97% of teachers accomplished 100% of their professional development targets during the intensive pre-service training institute. While launching the new Research, Design, and Impact department, I stewarded the creation of national student metrics to gauge learning for 13,000 students, including a literacy pilot that added 2.5 months of writing gains. Finally, I spearheaded a national conference that drew 424 attendees and achieved a net promoter score of 98.
                  </p>
                </div>

                {/* Teach For India */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Program Manager</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Aug 2010 – June 2012
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Teach For India, Pune, India
                  </p>
                  <p>
                    In India, I supported 45 teachers who reached over 1,200 students. During the 2011–2012 school year, my team delivered twice the typical annual reading gains. I launched a school transformation initiative that secured ₹1.5 million to expand the program and created a student scholarship in collaboration with a Columbia University society. To bolster professional development, I also built an online library of more than 100 instructional best-practice videos.
                  </p>
                </div>

                {/* Nanakuli */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="mb-0 text-lg md:text-xl">Spanish Teacher</h3>
                    <p className="text-gray-600 dark:text-gray-400 bg-beige-300/20 px-3 py-1 rounded-full text-xs md:text-sm">
                      Aug 2006 – June 2008
                    </p>
                  </div>
                  <p className="font-semibold text-primary-600">
                    Nānākuli High &amp; Intermediate School, Nānākuli, HI
                  </p>
                  <p>
                    While teaching at a Native Hawaiian homestead, I led 88 new language learners to write page-length essays in Spanish with an average mastery rate of 83%. I also founded an honors society, established a college scholarship, and launched a summer travel program. During the 2007–2008 school year, I received a &quot;Teacher of the Year&quot; award.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ================= EDUCATION ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-primary-600">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Education
                </h2>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg md:text-xl">
                    Harvard University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Doctorate in Education Leadership (Expected: May 2026)
                  </p>
                  <ul className="list-disc pl-5 space-y-1 md:space-y-2">
                    <li>Education Entrepreneurship Fellow: Received funding to develop the prototype of an AI tool.</li>
                    <li>Consultant: Co-authored an AI Implementation Guide for Prince George’s County Public Schools.</li>
                    <li>Superintendent Fellow: Developed an AI Equity Coach for the Public Schools of Brookline and represented the district on a state-level AI Task Force.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg md:text-xl">
                    Columbia University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Master’s in International Educational Development (2010)
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg md:text-xl">
                    Pepperdine University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor’s in International Studies with Minors in Spanish &amp; French (2006)
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ================= CERTIFICATES ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-beige-300">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Certificates
                </h2>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Relay Graduate School of Education, AI Prompt Engineering Microcredential (2024)</li>
                  <li>University of Denver, Trilogy Web Development Certificate (2018)</li>
                </ul>
              </div>
            </motion.section>

            {/* ================= PUBLICATIONS ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-secondary-500">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Publications
                </h2>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Clark, R. (2025). <em>Can AI Help to Elevate the Voices of Students?</em> VERIVOX.{" "}
                    <Link
                      href="https://www.verivox.pro/ruiz"
                      target="_blank"
                      className="underline"
                    >
                      https://www.verivox.pro/ruiz
                    </Link>
                  </li>
                  <li>
                    Clark, R. (2024). <em>Who Will Control the Robots?</em> Medium.{" "}
                    <Link
                      href="https://medium.com/@ruiz_38224/who-will-control-the-robots-48ce9cc4fa49"
                      target="_blank"
                      className="underline"
                    >
                      https://medium.com/@ruiz_38224/who-will-control-the-robots-48ce9cc4fa49
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* ================= SKILLS ================= */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md p-8 border-l-4 border-accent-400">
                <h2 className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700 text-primary-600 text-xl md:text-2xl">
                  Skills
                </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-beige-300/10 p-6 rounded-lg">
                    <h3 className="mb-3 font-semibold text-lg">Coding</h3>
                    <p>Python, JavaScript (Next.js, React), SQL, HTML, CSS</p>
                  </div>
                  <div className="bg-accent-400/10 p-6 rounded-lg">
                    <h3 className="mb-3 font-semibold text-lg">Platforms</h3>
                    <p>GitHub, Supabase, and Vercel</p>
                  </div>
                  <div className="bg-beige-300/10 p-6 rounded-lg">
                    <h3 className="mb-3 font-semibold text-lg">Productivity</h3>
                    <p>80 WPM, Microsoft Office Suite, Salesforce, Adobe Photoshop, &amp; Illustrator</p>
                  </div>
                  <div className="bg-accent-400/10 p-6 rounded-lg">
                    <h3 className="mb-3 font-semibold text-lg">Languages</h3>
                    <p>English &amp; Spanish (Native), French (Proficient), Armenian (Intermediate)</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
