import { motion } from 'framer-motion';
import React from 'react'

const Skill = ({name, x,y}) => {
    return (
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            py-3 px-6 shadow-dark cursor-pointer absolute '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y}}
            transition={{duration:1.5}}
            >
                {name}
            </motion.div>
        )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center' > Skills </h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <Skill name={'Web'} />
            <Skill name={'JUnit'} x={'-10vh'} y={'-20vw'} />
            <Skill name={'TypeScript'} x={'25vh'} y={'10vw'} />
            <Skill name={'WebService'} x={'2vh'} y={'20vw'} />
            <Skill name={'SpringBoot'} x={'-35vh'} y={'6vw'} />
            <Skill name={'Java'} x={'-40vh'} y={'15vw'} />
            <Skill name={'React'} x={'25vh'} y={'-2vw'} />
            <Skill name={'BootStrap'} x={'50vh'} y={'0vw'} />
            <Skill name={'HTML'} x={'50vh'} y={'12vw'} />
            <Skill name={'JPQL'} x={'-60vh'} y={'-10vw'} />
            <Skill name={'CSS'} x={'40vh'} y={'-15vw'} />
            <Skill name={'SQL'} x={'-28vh'} y={'-10vw'} />
        </div>
    </>
  )
}

export default Skills;