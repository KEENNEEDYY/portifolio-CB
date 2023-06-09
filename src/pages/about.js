
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/profile-pic-about.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
            if (isInView) {
                motionValue.set(value);
            }
        }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value ]);

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>D.Kennedy | About Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light"
        >
            <Layout className='pt-16'>
                <AnimatedText text="A paixão é o que alimenta meu propósito!" 
                    className='mb-16 !text-5xl lg:!text-4xl sm:!text-3xl xs:!text-1xl sm:mb-8'
                />
                <div className='grid w-full grid-cols-8 gap-16 
                    sm:gap-8'
                >
                    <div name='Biography container'
                        className="col-span-3 flex flex-col items-start justify-start 
                        xl:col-span-4 md:order-2 md:col-span-8"
                    >
                        <h2 className='mb-4 font-bold uppercase text-dark/75 dark:text-light/75'>Biografia</h2>
                        <p className="font-medium text-sm text-justify" >
                            Olá, sou Kennedy, um desenvolvedor fullstack com conhecimento em implementação de projetos funcionais e 
                            focados na usabilidade. Tenho habilidades sólidas em desenvolvimento de frontend e backend, utilizando 
                            tecnologias como TypeScript, React, Java e Spring Boot.
                        </p>
                        <p className="my-4 font-medium text-sm text-justify" >
                            Quando estou trabalhando em um projeto, meu foco é garantir que a funcionalidade seja priorizada e que a 
                            usabilidade seja considerada em cada etapa. Estou constantemente buscando maneiras de melhorar minhas habilidades 
                            e aprender novas tecnologias para oferecer soluções de qualidade e inovadoras.
                        </p>
                        <p className="font-medium text-sm text-justify" >
                            Estou entusiasmado fazendo uma transição para a área de desenvolvimento e estou pronto para enfrentar novos desafios. 
                            Mal posso esperar para contribuir com minha paixão pelo desenvolvimento  e minha ênfase na funcionalidade e usabilidade de sistemas. 
                            Meu foco e interesse é na entrega de soluções de qualidade.
                        </p>
                    </div>
                    <div name="Image container"
                        className=' col-span-3 relative rounded-2xl border-2 border-solid border-dark 
                        bg-light dark:bg-dark dark:border-light p-5 h-fit 
                        xl:col-span-4 md:order-1 md:col-span-8
                        ' 
                    >
                        <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                            ' 
                        />
                        <Image src={profilePic} alt='Kennedy' className='w-full h-auto rounded-2xl mt-[5%] dark:bg-dark ' 
                            priority 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center lg:order-3' 
                    >
                        <div className='flex flex-col items-end justify-center xl:items-center' >
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light 
                                xl:text-center md:text-lg sm:text-base xs:text-sm'
                            >
                                clientes
                            </h2>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={100} />%
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light 
                                xl:text-center md:text-lg sm:text-base xs:text-sm'
                            >
                                satisfeitos
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={40} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light 
                                xl:text-center md:text-lg sm:text-base xs:text-sm' 
                            >
                                projetos concluídos
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={13} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light 
                                xl:text-center md:text-lg sm:text-base xs:text-sm' 
                            >
                                anos de experiência
                            </h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about;
