import cendra from "../assets/images/wines/cendra.png";
import fosc from "../assets/images/wines/fosc.png";
import brasa from "../assets/images/wines/brasa.png";
import llambrusca from "../assets/images/wines/llambrusca.png";
import flor from "../assets/images/wines/flor.png";
import brisamar from "../assets/images/wines/brisamar.png";

const wines = [
    {
        id: 1,
        type: "products.type.red",
        name: "Cendra Roja",
        description: "products.cendra.description",
        image: cendra,
        price: 80,
    },
    {
        id: 2,
        type: "products.type.red",
        name: "Fosc del Bosc",
        description: "products.fosc.description",
        image: fosc,
        price: 70,
    },
    {
        id: 3,
        type: "products.type.red",
        name: "Brasa",
        description: "products.brasa.description",
        image: brasa,
        price: 60,
    },
    {
        id: 4,
        type: "products.type.red",
        name: "Llambrusca",
        description: "products.llambrusca.description",
        image: llambrusca,
        price: 50,
    },
    {
        id: 5,
        type: "products.type.rose",
        name: "Flor d'estiu",
        description: "products.flor.description",
        image: flor,
        price: 40,
    },
    {
        id: 6,
        type: "products.type.white",
        name: "Brisamar",
        description: "products.brisamar.description",
        image: brisamar,
        price: 40,
    },
];

export default wines;