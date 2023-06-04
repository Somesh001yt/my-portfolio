import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] lg:w-[520px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-text-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' rounded-[20px] py-5 px-12 lg:w-[520px] min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
   </motion.div>

   <motion.p
   variants={fadeIn('', '', 0.1, 1)}
   className='mt-4 text-blue-300 text-[17px] max-w-3xl leading-[30px]'
   >
   Hi I'm a Front-End developer with experience in JavaScript and
        and expertise in frameworks like React, Angular, and
        Ionic. I'm a quick learner and collaborate closely with clients to
        create efficient and user-friendly solutions. Let's work together!
   </motion.p>
   
   <div className="mt-20 flex flex-wrap gap-20 text-white-100 ">
   {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
   </div>

   </>
  )
}

export default SectionWrapper(About, 'about')
 