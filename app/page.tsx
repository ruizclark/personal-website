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
            <p className="text-xl md:text-2xl mb-8">AI Edupreneur & Educator</p>
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
            <h2 className="text-center mb-12">My Mission</h2>
            <p className="text-lg md:text-xl mb-8 text-center italic">
              "My grandfather moved to the US from México as a bracero, and my mom followed in his footsteps. Both of my
              parents grew up in low-income, rural communities. They did everything in their power to make sure that I
              had access to opportunity, which is why I became an educator. As an AI edupreneur, I am very conscious of
              the disparities that exist within the field of machine learning. It is therefore my mission to ensure that
              the voices of diverse people are represented as these new technologies reshape society."
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
            <h2 className="text-center mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-4">In Lak'Ech</h3>
                <p className="text-lg leading-relaxed">
                  "You are my other me… If I do harm to you… I do harm to myself."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-4">Reach Back</h3>
                <p className="text-lg leading-relaxed">
                  "When… you've walked through that doorway of opportunity… reach back." – Michelle Obama
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
              >
                <h3 className="mb-4">Be Boldly You</h3>
                <p className="text-lg leading-relaxed">
                  I believe it is important to encourage others to be their authentic selves while also striving to be
                  the best versions of their selves.
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
                View My Projects
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
