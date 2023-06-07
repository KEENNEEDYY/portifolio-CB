import React, { useRef, useState } from 'react';
import { useScroll,motion } from 'framer-motion';
import LiIcon from './LiIcon';
import Link from 'next/link';

const Details = ({ position, company, companyLink, time, address, work }) => {

    const [workText, setWorkText] = useState("Descrição [...]");

    const handleClick = () => {
        workText===work ? setWorkText("Descrição [...]") : setWorkText(work);
    }

    const ref = useRef(null);
    return (
        <li ref={ref} className='!my-2 !first:mt-0 !last:mb-0 !w-[70%] !mx-auto !flex !flex-col !items-left !justify-between' >
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} >
                <h3 className='!capitalize !font-bold !text-2xl' >
                    {position}&nbsp;<Link href={`${companyLink}`} 
                    target="_blank"
                    className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </Link>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75' >
                    {time} | {address}
                </span>
                    <p className='font-medium w-full hover:underline' onClick={handleClick} style={{ cursor: 'pointer'}}>
                        {workText}
                    </p> 
            </motion.div>
        </li>
    );  
};

const Experience = () => {
    
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    );


  return (
    <motion.div className='my-64'>

        <h2 className='font-bold text-8xl mb-32 w-full text-center' >
            Experiência
        </h2>
        
        <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div style={{scaleY: scrollYProgress }} 
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" 
                /> 
                <ul className="w-full flex flex-col items-start justify-between ml-4 mb-1" >
                    <Details 
                            position={"Analista de Redes Pleno"}
                            company={"VALENET"}
                            companyLink={"www.valenet.com.br"}
                            time={"out/2021 - atual"}
                            address={"Itabira - MG"}
                            work={"Como analista de redes pleno, tenho uma sólida experiência em diversas áreas, incluindo o trabalho com sistemas de monitoramento, como Solar Winds, Zabbix, Grafana e Cacti. Fui responsável por configurar parâmetros essenciais, como SNMP, OID e ICMP, e por desenhar topologias para monitorar ativos de rede. Tenho habilidades sólidas em OSI/TCP IP, o que me permite identificar e solucionar incidentes de rede, aplicando soluções iniciais nas camadas física, de enlace e de rede. Na camada de enlace, possuo experiência em configurar e resolver problemas, incluindo loops de rede, gerenciamento de equipamentos com VLANs e configuração de MPLS. Tenho conhecimento em identificar interfaces, como SFP e QSFP, e em entender diferentes codificações ópticas, como multimode, singlemode, bidirecional e unidirecional. Além disso, sou capaz de analisar o sinal de equipamentos de fibra ou rádio. Tenho vivência em configurar e estruturar sistemas de telefonia fixa comutada, monitorando e analisando troncos de telefonia. Também configurei TDM e bundle para entrega de troncos de telefonia até um gateway. Na camada de rede, tenho experiência em DHCP, roteamento estático, OSPF, MPLS, PPPoE, NAT e firewall no Mikrotik e no Linux, utilizando IPtables. Além disso, possuo conhecimento em PABX Elastic e Isabel, o que adiciona mais habilidades ao meu perfil como analista de redes."}                
                        />
                </ul> 
                <ul className="w-full flex flex-col items-start justify-between ml-4 mb-1" >
                    <Details 
                        position={"Analista de Redes Junior"}
                        company={"VALENET"}
                        companyLink={"www.valenet.com.br"}
                        time={"mar/2018 - out/2021"}
                        address={"Itabira - MG"}
                        work={"Como analista de redes júnior, fui responsável por gerenciar e oferecer suporte em redes MAN/WAN TCP/IPv4. Trabalhei com switches, roteadores e OLTs de fabricantes renomados, como ZTE, Juniper, DATACOM, Mikrotik, HUAWEI e CISCO. Além disso, realizei acesso e suporte a rádios de frequência licenciada, como SIAE/CERAGON, e rádios Ubiquit 5.8. Também forneci suporte a serviços hospedados em ambientes Linux e monitorei as redes utilizando ferramentas como Cacti e SolarWinds. Utilizei tecnologias como VLAN, switching, roteamento estático, GPON, PPPoE, SNMP e ICMP. Essas experiências foram desempenhadas em um nível júnior, evidenciando minha familiaridade e competência nessas tecnologias e protocolos de rede."}                
                    />
                </ul> 
                <ul className="w-full flex flex-col items-start justify-between ml-4 mb-1" >
                    <Details 
                        position={"Analista de Suporte Técnico"}
                        company={"VALENET"}
                        companyLink={"www.valenet.com.br"}
                        time={"fev/2017 - mar/2018"}
                        address={"Itabira - MG"}
                        work={"Como analista de suporte técnico em um call center, meu papel consistia em ajudar os clientes da empresa a resolver problemas relacionados a equipamentos. Por meio de comunicação telefônica, identificava falhas nos dispositivos, bem como situações de mau uso ou falta de conhecimento por parte dos clientes. Com base nas informações coletadas, encaminhava os reparos necessários, orientava sobre o uso adequado dos equipamentos ou fornecia instruções para solucionar o problema. Meu objetivo era garantir a satisfação dos clientes, oferecendo um suporte eficiente e eficaz, contribuindo para a resolução de questões técnicas e proporcionando uma experiência positiva."}                
                    />
                </ul>
                <ul className="w-full flex flex-col items-start justify-between ml-4 mb-1" >
                    <Details 
                        position={"Técnico de informática"}
                        company={"Comunidade Educativa CEDAC"}
                        companyLink={"comunidadeeducativa.org.br"}
                        time={"jun/2014 - mar/2015"}
                        address={"Itabira - MG"}
                        work={"Fui responsável pela implementação e administração de um sistema de controle para a biblioteca, semelhante a um sistema de aluguel. Além disso, conduzi atividades de inclusão digital para a comunidade local e forneci suporte de TI aos professores da secretaria de educação. Também participei na organização e manutenção dos espaços públicos, como a biblioteca e o laboratório de informática. Essa experiência me proporcionou habilidades em administração de sistemas, suporte técnico e trabalho em equipe."}                
                    />
                </ul>
                <ul className="w-full flex flex-col items-start justify-between ml-4 mb-1" >
                    <Details 
                        position={"Instrutor de informática"}
                        company={"Compuway"}
                        companyLink={"www.compuway.com.br"}
                        time={"nov/2010 - fev/2014"}
                        address={"Itabira - MG"}
                        work={"No Laboratório de Informática, tive a responsabilidade de acompanhar os alunos em suas atividades nas diversas áreas da tecnologia. Além disso, ministrei cursos de PHP, HTML e Java para os alunos, proporcionando-lhes conhecimentos fundamentais nessas linguagens de programação. Realizei também a manutenção preventiva e corretiva de computadores, garantindo o funcionamento adequado dos equipamentos. Ainda, cuidei da manutenção da rede de informática, assegurando sua operação eficiente. No que diz respeito ao servidor Windows, fui encarregado de sua configuração e administração, buscando proporcionar um ambiente de trabalho seguro e produtivo. Ao desempenhar essas funções, adquiri amplo conhecimento em hardware, software e redes, além de desenvolver habilidades sólidas em solução de problemas e gerenciamento de servidores."}                
                    />
                </ul>                                
        </div>
    </motion.div>
  )
}


export default Experience;