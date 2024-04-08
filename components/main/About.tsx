"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  return (
    <div id="about-me" className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            À propos
        </h1>
        <motion.div
          variants={slideInFromLeft(0.7)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref} 
          className='flex flex-col items-center justify-center py-20'
        >
          <p className='text-lg text-gray-400 my-5 max-w-[900px] text-center sm:text-2xl'>
            Je suis un développeur web passionné par la création de solutions innovantes.

            Avec une solide expertise en HTML, CSS, JavaScript et une expérience pratique avec React.js, je conçois des sites web esthétiques et fonctionnels. Toujours à l&apos;affût des nouvelles technologies, je cherche à contribuer à des projets stimulants pour mettre mes compétences en pratique et apporter une réelle valeur ajoutée. Découvrez mes travaux ci-dessous et contactez-moi pour toute collaboration.
          </p>
        </motion.div>
    </div>
  )
}

export default About;

