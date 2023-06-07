import AnimatedText from '@/components/AnimatedText';
import {motion} from "framer-motion";
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid 
            border-dark bg-light dark:bg-dark dark:border-light
            shadow-2xl p-12' >
            <div className='absolute !top-0 !-right-3 !-z-10 !w-[101%] !h-[103%] !rounded-[2rem] 
                bg-dark dark:bg-light
                !rouded-br-3xl  
            ' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg'            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                     whileHover={{scale:1.05}}
                     transition={{duration:0.2}}
                     priority 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6' >
                <span className='text-primary dark:text-primaryDark font-medium text-xl ' >
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light' >
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center' >
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={github} target="_blank" 
                        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 text-lg font-semibold'
                    >
                        <span >Visit Project</span>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center 
            rounded-2xl border border-solid 
            border-dark bg-light dark:bg-dark dark:border-light
            shadow-2xl p-6 relative' >
            <div className='absolute top-0 !-right-3 !-z-10 !w-[102%] !h-[103%] !rounded-[2rem] bg-dark dark:bg-light
                rouded-br-3xl  
            ' />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'            
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    transition={{duration:0.2}}
                    whileHover={{scale:1.05}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4' >
                <span className='text-primary dark:text-primaryDark font-medium text-xl' >{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-3xl font-bold' >{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between' >
                    <Link href={github} target="_blank" className='text-lg font-semibold underline'>
                            <span >Visit</span>
                    </Link>
                    <Link href={github} target="_blank" className='w-8'>
                        <GithubIcon />
                    </Link>
                    
                </div>
            </div>
        </article>        
    );
};

const projects = () => {
  return (
    <>
        <Head>
            <title>Kennedy Leocadio | Projects Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light' >
            <Layout className='pt-16' >
                <AnimatedText text={"Imagination Trumps Knowledge!"} className='text-5xl mb-16 '/>

                <div className='grid grid-cols-12 gap-24 gap-y-32' >
                    <div className='col-span-12' >
                        <FeaturedProject 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Feacture Project"
                        />
                    </div>
                    <div className='col-span-6' >
                        <Project 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6' >
                        <Project 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-12' >
                        <FeaturedProject 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Feacture Project"
                        />
                    </div>
                    <div className='col-span-6' >
                        <Project 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Project"
                        />
                    </div>
                    <div className='col-span-6' >
                        <Project 
                            title="Crypto Screener Application"
                            img={project1}
                            summary="This is a project to help you management a cryptocurrency screener."
                            link="https://portifolio.desenvolvedor-kennedy.com.br/"
                            github="https://github.com/kennedy-leocadio/crypto-screener"
                            type="Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects;
