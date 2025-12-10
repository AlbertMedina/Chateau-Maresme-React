import aromes from "../assets/images/packs/aromes.png";
import essencia from "../assets/images/packs/essencia.png";
import premium from "../assets/images/packs/premium.png";

const packs = [
    {
        id: 1,
        type: "products.type.red",
        name: "Aromes Fosques",
        description: "products.aromes.description",
        image: aromes,
        price: 180,
    },
    {
        id: 2,
        type: "products.type.varied",
        name: "Essència del Celler",
        description: "products.essencia.description",
        image: essencia,
        price: 110,
    },
    {
        id: 3,
        type: "products.type.red",
        name: "Cendra Roja Premium",
        description: "products.premium.description",
        image: premium,
        price: 200,
    }
];

export default packs;