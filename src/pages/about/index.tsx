import Layout from "@/components/layout/_root/Layout";

function Abbout() {
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="relative h-[265px]">
                        <img alt="Interior of a clothing store with racks of clothes and shelves of shoes" className="w-full h-full object-cover" src="https://storage.googleapis.com/a1aa/image/gpvNU8y8mr4JLxr7HkWgAyCeLMyM8Dm68Vn8B2lnrpxBfJrTA.jpg" width={1920} />
                    </div>
                    <div className="px-4 py-8">
                        <h1 className="text-5xl font-black font-prompt text-left">
                            FROM 1996 TO TODAY
                        </h1>
                        <div className="mt-8 text-lg leading-relaxed justify-center flex">
                            <div className="lg:w-1/2 flex items-center flex-col">
                                <p>
                                    C’est en 1996 que JUSTCOW ouvre ses premières portes en banlieue Parisienne, dans le 95 au nord de Paris. Pionniers du Streetwear en France et première enseigne à mélanger les univers Skate et Hip Hop, la boutique se développe rapidement et très vite les équipes décident de s’installer dans la capitale.
                                </p>
                                <p className="mt-4">
                                    A l’époque Internet n’est pas aussi présent qu’aujourd’hui, et STARCOW s’efforce d’aller chercher et d’importer des produits non distribués dans l’hexagone. Permettant à toute une génération d’accéder à des pièces alors introuvables, le shop acquiert donc très vite une belle reconnaissance de ses pairs français ou étranger.
                                </p>
                                <p className="mt-4">
                                    Quatre ans après cette ouverture, l’enseigne STARCOW fait son apparition dans le quartier des Halles, hub et centre névralgique de la culture Hip Hop et Skate parisienne. C’est alors qu’elle décide de se différencier en proposant une sélection de plus en plus pointue.
                                    La force de STARCOW c’est de vendre des produits en édition limitée de grande marques telles que Nike, Adidas ou The North Face, de les associer avec des labels indépendants comme 40s & Shorties ou Maharishi et de proposer en parallèle une sélection très fine des classiques U.S. comme New Era ou Dickies.
                                </p>
                                <p className="mt-4">
                                    Four years after opening, STARCOW made its appearance in the Halles district, the hub and nerve center of Parisian Hip Hop and skate culture. It was then that STARCOW decided to differentiate itself by offering an increasingly specialized selection.
                                </p>
                                <p className="mt-4">
                                    At the time, the Internet wasn't as widely available as it is today, and STARCOW endeavored to source and import products not distributed in France. Providing a whole generation with access to parts that were unobtainable at the time, the shop quickly gained recognition from its French and foreign peers alike.
                                </p>
                                <p className="mt-4">
                                    STARCOW's strength lies in selling limited-edition products from major brands such as Nike, Adidas and The North Face, associating them with independent labels such as 40s & Shorties and Maharishi, while at the same time offering a very fine selection of U.S. classics such as New Era and Dickies.
                                </p>
                                <p className="mt-4">
                                    STARCOW is a perfect blend of the New York of the 90s, the Californian skateboard scene of the 2000s and a Parisian lifestyle.
                                </p>
                                <p className="mt-4">
                                    For 25 years now, every generation flirting with sneaker, hip-hop and skate culture has found something to suit their feet when passing through the store's doors.
                                </p>
                                <p className="mt-4">
                                    Today, STARCOW remains true to its origins, so if you're looking for iconic pieces, classic workwear or a simple screen-printed tee, you've come to the right place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Abbout;