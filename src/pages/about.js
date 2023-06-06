
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
            <title>Kennedy Leocadio | About Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <main className="flex w-full flex-col items-center justify-center">
            <Layout className='pt-16'>
                <AnimatedText text="A paixão é o que alimenta meu propósito!" className='mb-16 !text-5xl '/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className="col-span-3 flex flex-col items-start justify-start">
                        <h2 className="mb-4 text-light font-bold uppercase text-dark/75">Biografia</h2>
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
                    <div className=' col-span-3 relative rounded-2xl border-2 border-solid border-dark 
                        bg-light p-8' >
                        <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt='Kennedy' className='w-full h-auto rounded-2xl mt-[5%]' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between' >
                        <div className='flex flex-col items-end justify-center' >
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={3} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                clientes satisfeitos
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={40} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75' >
                                projetos concluídos
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={13} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75' >
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
