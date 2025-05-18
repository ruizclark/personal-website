"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/profile.jpg" alt="Ruiz Clark" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="mb-4">Ruiz Clark</h1>
            <p className="text-xl md:text-2xl mb-8">AI Edupreneur</p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-center mb-10 font-bold text-2xl text-primary-600">
              My mission is to transform how institutions leverage artificial intelligence (AI) to meet the needs of learners.
            </p>
            <p className="text-base mb-8 text-center">
              For more than 20 years, I have held leadership roles around the globe—driving organizational learning, change management, and innovation in education. As an executive, I led a team of 100 staff who supported over 200 teachers, impacting the lives of 30,000 students. During that time, I oversaw the creation of a Master’s program in Teacher Leadership, spearheaded a nationwide School Transformation Initiative, established a Public Policy Lab, and launched an Innovation Accelerator.
            </p>
            <p className="text-base mb-8 text-center">
              Fueled by my passion for educational innovation, I founded Qüento, an AI-powered platform that elevates student and community voices, and VERIVOX, an online platform showcasing the work of doctoral students at the Harvard Graduate School of Education.
            </p>
            <p className="text-base mb-8 text-center">
              Combining deep program-development expertise, technical savvy, and executive coaching, I partner with educational institutions to design and implement AI-driven solutions that deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-beige-300/30 dark:bg-beige-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-center mb-12">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-600">Innovation Strategy</h3>
                <p className="text-base leading-relaxed">
                  Design and launch AI-driven initiatives that transform education.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-600">Organizational Learning</h3>
                <p className="text-base leading-relaxed">
                  Use data to guide strategic decisions and drive continuous improvement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold text-primary-600">Executive Coaching</h3>
                <p className="text-base leading-relaxed">
                  Advise leaders on change management and leadership development.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/projects" className="btn-secondary">
                Current Projects
              </Link>
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 btn-outline">
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
