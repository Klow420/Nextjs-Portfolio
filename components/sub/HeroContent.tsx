"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Développeur Web Portfolio</h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-semiboldbold text-white max-w-[600px] w-auto h-auto'
            >
                <span className='text-2xl sm:text-6xl'>
                    Founir 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> la meilleure expérience </span>
                    pour vos projets
                </span>
                
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                Bonjour et bienvenue dans mon monde numérique ! Je m&apos;appele Keiran, je suis passionné par le développement web et j&apos;ai le plaisir de vous présenter mon portfolio, une collection de mes projets où je mets en avant mes compétences et mon savoir-faire dans la création de sites web innovants et fonctionnels. Explorez, découvrez et laissez-vous inspirer par mon travail !
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
            >
                En savoir plus!
            </motion.a>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
            <Image 
                src="/mainIconsdark.svg"
                alt='Icônes de travail'
                height={650}
                width={650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent