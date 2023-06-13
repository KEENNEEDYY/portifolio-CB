import React, { useRef } from 'react';
import { useScroll,motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, moreInfo, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='!my-2 !first:mt-0 !last:mb-0 !w-[60%] !mx-auto !flex !flex-col !items-center !justify-between
            md:!w-[80%]
        '
        >
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} >
            <h3 className='capitalize font-bold text-2xl
                    sm:text-xl xs:text-lg
                ' 
            >
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75
                    xs:text-sm 
                ' 
            >
                {time} | {place} | {moreInfo}
            </span>
            <p className='font-medium w-full
                    md:text-sm 
                ' 
            >
                {info}
            </p>
        </motion.div>
    </li>
    );  
}; 

const Education = () => {
    
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    );

    const scale = scrollYProgress;

  return (
    <motion.div className='my-64'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center
            md:text-6xl xs:text-4xl md:mb-16
            ' 
        >
            Formação
        </h2>
        
        <div ref={ref} className="w-[75%] mx-auto relative
            lg:w-[90%] md:w-full"
        >

                <motion.div style={{scaleY: scrollYProgress }} 
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]" 
                /> 
                <ul className="w-full flex flex-col items-start justify-between ml-4
                    xs:ml-2"  
                >
                    <Details 
                        type={"Bacharel em Sistemas De Informação"}
                        time={"08/07/2022"}
                        place={"UNIVERSIDADE ESTÁCIO DE SÁ"}
                        info={"Estruturas de Dados e Algoritmos, Arquitetura de Sistemas e de Computação e Inteligência Artificial"}
                    />
                </ul> 
                <ul className="w-full flex flex-col items-start justify-between ml-4" >
                    <Details 
                        type={"Técnico em telecomunicações"}
                        time={"31/12/2021"}
                        place={"Mônaco"}
                        info={"Tecnologias de transmisão, telecomunicações, telefonia, TV, infra-estruturas"}
                    />
                </ul> 
                <ul className="w-full flex flex-col items-start justify-between ml-4" >
                    <Details 
                        type={"Técnico em redes de computadores"}
                        time={"31/12/2019"}
                        place={"SENAC"}
                        info={"Configuração e instalação de redes LAN, MAN, WAN. Modelo OSI, DHCP, VLAN e tecnologias de roteamento"}
                    />
                </ul> 
                <ul className="w-full flex flex-col items-start justify-between ml-4" >
                    <Details 
                        type={"Engenharia de Computação"}
                        time={"30/02/2017"}
                        place={"Universidade Federal de Ouro Preto"}
                        moreInfo={"Trancado"}
                        info={"Cursado 2 anos no campus ICEA enquanto estive na cidade de João Monlevade. Algorítimos e estruturas de dados, arquitetura e engenharia de computação, sistemas embarcados."}
                    />
                </ul>  
        </div>
    </motion.div>
  )
}

export default Education;