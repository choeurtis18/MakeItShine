const Privacy = () => {
    return (
        <div className="px-12 py-16 flex flex-col">
            <h1 className="text-3xl">Mentions légales</h1>

            <section>
                <h2>Informations légales</h2>
                <p>Raison sociale : Make It Shine</p>
                <p>Statut juridique : Entreprise individuelle</p>
                <p>Siège social : Aucun</p>
                <p>Email : choeurtis.tchounga@gmail.com</p>
                <p>Numéro SIRET : 92336262800011</p>
            </section>
            <section>
                <h2>Hébergeur du site</h2>
                <p>Nom de l'hébergeur : Netlify</p>
                <p>Adresse de l'hébergeur : https://www.netlify.com/</p>
            </section>
            <section>
                <h2>Propriété intellectuelle</h2>
                <p>Tous les contenus présents sur le site Make It Shine sont protégés par les lois sur la propriété intellectuelle.</p>
            </section>
            <section>
                <h2>Données personnelles</h2>
                <p>Le site Make It Shine peut collecter et traiter des données personnelles conformément à sa politique de confidentialité.</p>
            </section>
        </div>
    )
};
  
export default Privacy;
  