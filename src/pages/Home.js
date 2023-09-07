import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

import Juice_Shop from "../assets/Juice_Shop.png";
import Yoga_Studio from "../assets/Yoga_Studio.png";
import Doctor_Office from "../assets/Doctor_Office.png";
import ContactForm from '../components/ContactForm';


const Home = (props) => {
    
    return (
        <>
        <header className="h-4/5 flex lg:flex-wrap py-[40px] max-sm:py-[24px]">
            <div className="max-sm:w-max max-sm:p-4 max-sm:gap-y-7
                        w-1/2 grid gap-y-10 bg-mid_primary_first p-16 text-dark_neutral">
                <span className="text-sm uppercase leading-7 tracking-widest">
                    Donnez à votre activité un éclat supplémentaire
                </span>
                <h1 className="grid gap-y-4 text-5xl font-bold uppercase">
                    MAKE IT<span className="text-primary_first"> SHINE</span>
                </h1>
                <p className="text-sm leading-7 tracking-wide">
                Proposer des solutions e-commerce et des sites de présentation clé en main pour les particuliers et les entreprises, avec des fonctionnalités performantes et une expérience utilisateur optimale, afin de véhiculer des messages de simplicité et d'améliorer leur rentabilité et leur performance.
                </p>
            </div>
            <div className="w-1/2 header_img max-sm:hidden"><div className="image"></div></div>
        </header>

        <div id="services" className="grid gap-y-10 px-12 py-[40px] max-sm:py-[24px] max-sm:p-12 text-center text-dark_neutral">
            <div className="grid gap-y-3">
                <h3 className="text-3xl font-bold">Mes Services</h3>
                <p className="text-sm text-mid_neutral">Voici les différents services que je propose</p>
            </div>

            <Accordion className='w-full' allowMultiple>
                {
                    props.sercicesList.map((element, index) => {
                        return (
                        <AccordionItem className='border-b border-dark_neutral py-[17px]' key={index}>
                            <h2>
                            <AccordionButton className='flex justify-between'>
                                <span className='text-left font-bold text-navy-900' flex='1'>
                                {element.title}
                                </span>
                                <AccordionIcon className='text-left !text-navy-900'/>
                            </AccordionButton>
                            </h2>
                            <AccordionPanel className='text-left text-medium mt-2 !text-navy-900' pb={4}>
                            {element.description}
                            </AccordionPanel>
                        </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>

        <div id="projets" className="grid gap-y-10 px-12 py-[40px] max-sm:py-[24px] max-sm:p-12 text-dark_neutral">

            <div className="grid gap-y-3 text-center">
                <h3 className="text-3xl font-bold">Exemple de Design</h3>
                <p className="text-sm text-mid_neutral">Voici quelques design de site que nous utilisons</p>
            </div>
            <div className="flex flex-wrap justify-center">
            {
                props.mesProjects.map((element, index) => {
                    return (
                        <a className="p-4 max-w-sm project_image_container" 
                            href={element.link} target='_blanc' key={index}
                        >
                            <div className="flex rounded-lg flex-col">
                            <figure className="project_image">
                                <img src={element.image === "Juice_Shop" ? Juice_Shop : 
                                    (element.image === "Doctor_Office" ? Doctor_Office : Yoga_Studio)} 
                                alt={element.image}/>
                                <figcaption>{element.title}</figcaption>
                            </figure>
                            </div>
                        </a>                 
                    )
                })
            }
            </div>
        </div>

        <div className="grid gap-y-10 px-12 py-[40px] max-sm:py-[24px] max-sm:p-12 text-dark_neutral">
            <div className="grid gap-y-3 text-center">
                <h3 className="text-3xl font-bold">Avis de nos clients</h3>
                <p className="text-sm text-mid_neutral">Ce que nos clients pensent de nous !</p>
            </div>

            <div className="flex flex-wrap gap-y-10 justify-between">
            {
                props.avisClient.map((element, index) => {
                    return (
                        <div className="max-sm:w-full w-[30%] grid gap-y-3" key={index}>
                            <p className="text-sm text-mid_neutral">"{element.avis}"</p>
                            <h4 className="text-sm text-mid_neutral font-bold">{element.name}</h4>
                        </div>
                    )
                })
            }
            </div>
        </div>

        <div className="grid gap-y-10 px-12 py-[40px] max-sm:py-[24px] max-sm:p-12 max-sm:p-2 text-ligther_neutral bg-mid_neutral form-container">
            <ContactForm />
        </div>
        </>
    )
};

export default Home;