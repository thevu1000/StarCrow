function OtherPage() {
    const deliveryInfo = [
        {
            title: "Livraison",
            content: [
                "Le délai de livraison figure explicitement sur la fiche d'un produit. Ce délai s'entend hors week-end et jours fériés, et sous réserve de disponibilité des produits confirmée par le fournisseur. Tout retard de livraison du fait de circonstances indépendantes de la volonté du vendeur ne pourra entraîner l’annulation de la commande. La responsabilité du vendeur ne pourra être engagée pour tout préjudice résultant de ce retard.",
                "- Livraison France : UPS / Colissimo",
                "- Livraison UE : UPS / Colissimo",
                "- Livraison Hors UE : UPS",
                "starcowparis.com s'engage a mettre à la disposition du transporteur les produits commandés dans un délai maximum de 72h.",
            ],
        },
        {
            title: "Click & Collect",
            content: [
                "Pour chaque commande passée en « click & collect » vous recevrez un email de confirmation de commande ainsi qu’un email affirmant que votre commande est prête à être récupérée. Sans ce dernier email, les boutiques ne seront pas en mesure de vous donner votre commande.",
                "Le magasin vous accueillera pour récupérer votre commande du lundi au vendredi de 14:00 à 18:00.",
            ],
        },
        {
            title: "Transport",
            content: [
                "Le mode de transport choisi par le vendeur est considéré contractuellement comme le mieux adapté à l’acheminement des biens expédiés. Toute divergence à ce sujet devra faire l’objet d’une demande expresse de l’acheteur.",
                "Il appartient au client de vérifier à réception de la livraison le nombre et l’état des biens livrés. En cas de dommage ou d’avarie, l’acheteur doit émettre les réserves d’usage sur le bon de livraison et en informer le transporteur dans les 48 heures suivant la réception, par lettre recommandée avec accusé de réception.",
            ],
        },
        {
            title: "Réception & contrôle",
            content: [
                "Le contrôle des biens livrés doit avoir lieu dans les 14 jours qui suivent la livraison. Sans préjudice des dispositions à prendre vis-à-vis du transporteur, l’acheteur devra informer le vendeur par lettre recommandée avec accusé de réception dans le délai fixé ci-dessus de tous vices apparents ou défaut de conformité des biens livrés.",
                "Les colis dont les bandes de garantie ont été enlevées doivent être refusés à la livraison. Veuillez émettre des réserves à la livraison en cas de doute sur l'état du colis et fournir les éléments suivants à J+1 après la livraison : photos de la marchandise, du dommage, du carton d'emballage, de l'étiquette de transport.",
            ],
        },
        {
            title: "DELIVERY",
            content: [
                "The delivery time is explicitly stated on the product sheet. This period excludes weekends and public holidays, and is subject to product availability confirmed by the supplier. Any delay in delivery due to circumstances beyond the seller's control shall not result in cancellation of the order.",
                "However, if the goods have not been delivered 30 days after the indicative delivery date, for any reason other than force majeure, the sale will be cancelled and the purchaser will be reimbursed without being able to claim any compensation.",
                "The seller is automatically released from any liability in the event of force majeure or events such as: lock-out, strike, epidemic, war, requisition, fire, flood, tooling accident, transport delays or any other cause leading to partial or total unemployment for the seller or its suppliers.",
            ],
        },
    ];

    return (
        <div className="flex justify-center">
            <div className="lg:w-1/2">
                <h1 className="font-prompt font-black lg:text-[80px] text-[26px] uppercase lg:leading-[100px]">
                    Conditions de livraisons Starcow
                </h1>
                <div className="lg:mt-10 mt-4 flex flex-col gap-4"  >
                    {deliveryInfo.map((item, index) => (
                        <div key={index}>
                            <h2 className="font-bold font-prompt lg:text-[50px] uppercase">{item.title}</h2>
                            {item.content.map((text, textIndex) => (
                                <p key={textIndex}>{text}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OtherPage;
