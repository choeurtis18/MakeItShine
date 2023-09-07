import React, { useRef }  from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_emailjs', 'template_emailjs', form.current, 'o2QkELT_3A_pPSQuh')
        .then((result) => {
            console.log(result.text);
            window.alert('message envoyé');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full bg-ligther_neutral px-16 py-8 rounded-xl max-sm:p-6">
            <h3 className="text-2xl font-bold text-dark_neutral">Me Contacter</h3>

            <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                    <label className="block uppercase font-bold mb-2" htmlFor="user_object">
                    Objet
                    </label>
                    <input className="w-full text-dark_neutral border rounded py-2 px-2" 
                    type="text" name="user_object" placeholder="Restaurant" id="user_object" required/>
                </div>
                <div className="w-full md:w-1/2 px-3">                    
                    <label className="block uppercase font-bold mb-2" htmlFor="user_mail">
                    Email
                    </label>
                    <input className="w-full text-dark_neutral border rounded py-2 px-2" 
                    type="text" name="user_mail" placeholder="restaurant@gmail.com" id="user_mail" required/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase font-bold mb-2" htmlFor="user_message">
                Message
                </label>
                <textarea className="w-full text-dark_neutral border border-gray-200 rounded py-3 px-4 mb-3" name="user_message" 
                id="user_message" cols="0" rows="7" placeholder="Je souhaite créer un site ..." required/>
                </div>
            </div>

            <div className="flex justify-center">
                <input className="shadow bg-primary_first text-ligther_neutral font-bold py-2 px-12 rounded cursor-pointer" 
                    type="submit" value="Envoyer message" />
            </div>
        </form>
    )
}

export default ContactForm;