import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from "../../public/images/profile/developer-pic-1.png";
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={ProfilePic} alt="KennedyLeocadio" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Transformando a visão em realidade com código e design." className='!text-4xl !text-left'/>
              <p className='my-4 text-base font-medium' >
                Como um habilidoso desenvolvedor full-stack, dedico-me a transformar ideias em aplicações web inovadoras.
                Explore meus projetos e artigos mais recentes, mostrando minha experiência em React.js e desenvolvimento web.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 
                  rounded-lg text-lg front-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark
                " download={true}>
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:kennedy.costa.valenet@gmail.com" target={"_blank"} 
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
