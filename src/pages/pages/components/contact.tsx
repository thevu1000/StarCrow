function ContactForm() {
    return (
        <div>
            <h1 className="font-prompt font-black lg:text-[80px] text-[26px] uppercase lg:leading-[100px]">
                Nous contacter
            </h1>
            <div className="flex flex-col md:flex-row justify-between lg:mt-8 mt-4">
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-black font-prompt mb-4">POSEZ NOUS VOS QUESTIONS</h1>
                    <form className="space-y-4">
                        <input type="text" placeholder="Nom" className="w-full p-3 border border-gray-300 rounded" />
                        <input type="email" placeholder="E-mail" className="w-full p-3 border border-gray-300 rounded" />
                        <input type="tel" placeholder="Numéro de téléphone" className="w-full p-3 border border-gray-300 rounded" />
                        <select className="w-full p-3 border border-gray-300 rounded">
                            <option>Objet</option>
                        </select>
                        <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                        <button type="submit" className="w-full bg-black text-white p-3 rounded font-bold">ENVOYER</button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                    <h2 className="text-xl font-black font-prompt mb-4">UNE QUESTION CONCERNANT UN ACHAT EN BOUTIQUE ?</h2>
                    <p className="mb-4">N'hésitez pas à nous écrire concernant vos achats en boutique aussi. Sachez cependant qu'il est possible que le traitement soit un peu plus long. Merci de votre compréhension.</p>
                    <button className="bg-white text-black text-[12px] border border-black p-3 rounded font-black font-prompt">ACCÉDER À MES COMMANDES</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;