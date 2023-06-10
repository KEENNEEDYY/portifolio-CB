import React from 'react'
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
      font-medium text-lg dark:text-light dark:border-light
      sm:text-base  
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; Todos direitos reservados</span>
            <div className='flex items-center lg:py-1' >
                Desenvolvido por 
                <span className='text-primary dark:text-primaryDark text-2xl px-1' >&#9825;</span>
                 &nbsp;
                 <Link href="https://www.instagram.com/leocadiokennedy/"
                    target={"_blank"}
                    className='underline underline-offset-2'
                 >
                    Kennedy
                 </Link>
            </div>
            <Link href="https://www.instagram.com/leocadiokennedy/" 
                target={"_blank"}            
            >Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer;
