import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/developer-pic.png";
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolvedor Kennedy | Home</title>
        <meta name="description" content="Desenvolvedor Kennedy" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full mb-6">
            <div className='w-1/2'>
              <Image src={ProfilePic} alt="KennedyLeocadio" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text={`Transformando ideias em insights, códigos em soluções.`} className='!text-4xl !text-left'/>
              <p className='my-4 text-base font-medium' >
                Como um desenvolvedor full-stack, dedico-me a transformar ideias em aplicações inovadoras.
                Explore meus projetos e artigos mais recentes, mostrando minha experiência em React, SpringBoot e desenvolvimento de sistemas.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg front-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark 
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                " download={true}>
                  Currículo <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:kennedy.costa.valenet@gmail.com" target={"_blank"} 
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24" >
          <Image src={lightBulb} alt="Kennedy" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
