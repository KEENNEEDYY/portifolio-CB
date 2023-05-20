import React from 'react'
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    '>
        <Layout className='py-8 flex items-center justify-between '>
            <span>{new Date().getFullYear()} &copy; Todos direitos reservados</span>
            <div className='flex items-center' >
                Desenvolvido por 
                <span className='text-primary text-2xl px-1' >&#9825;</span>
                 &nbsp;<Link href="https://www.instagram.com/leocadiokennedy/"
                    className='underline underline-offset-2'target={"_blank"}
                 >Kennedy</Link>
            </div>
            <Link href="https://www.instagram.com/leocadiokennedy/" 
                target={"_blank"}            
            >Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer;
