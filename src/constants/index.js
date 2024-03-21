import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Nosotros" },
    { href: "#products", label: "Servicios" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        bigShoe: bigShoe1,
    },
    {
        bigShoe: bigShoe2,
    },
    {
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Air Jordan-01",
        price: "$200.20",
        rating: '4.5',
    },
    {
        imgURL: shoe5,
        name: "Air Jordan-10",
        price: "$210.20",
        rating: '5.0',
    },
    {
        imgURL: shoe6,
        name: "Air Jordan-100",
        price: "$220.20",
        rating: '4.0',
    },
    {
        imgURL: shoe7,
        name: "Air Jordan-001",
        price: "$230.20",
        rating: '4.5',
    },    
];

export const services = [
    {
        imgURL: truckFast,
        label: "Ventas",
        subtext: "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japon. A los mejores precios del mercado."
    },
    {
        imgURL: shieldTick,
        label: "Delivery",
        subtext: "Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible."
    },
    {
        imgURL: truckFast,
        label: "Productos",
        subtext: "Contamos con las mejores marcas y calidad de productos del mercado."
    },
    {
        imgURL: support,
        label: "Asesoria",
        subtext: "Le brindamos una asesoría personalidad acerca de nuestros productos, a elegir el mejor repuesto para su movilidad."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Susana Horia',
        rating: 4.5,
        feedback: "Lorem ipsum dolor no me acuerdo que más seguía, pero buen servicio!"
    },
    {
        imgURL: customer2,
        customerName: 'Elmer Curio',
        rating: 4.5,
        feedback: "Lorem blablabla tengo sueño aaaa!"
    }
];


export const footerLinks = [
    {
        title: "Links",
        links: [
            { name: "Inicio", link: "#home" },
            { name: "Nosotros", link: "about-us" },
            { name: "Servicios", link: "#products" },
            { name: "Contacto", link: "contact-us" },
        ],
    },
    {
        title: "Ubicación",
        links: [
            { name: "Avenidad Nicolás Ayllon 3384", link: "https://www.google.com/maps/place/Av.+Nicol%C3%A1s+Ayll%C3%B3n+3384,+Ate+15012/@-12.0523847,-76.9580836,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c68ec9360e07:0x8252b2e61a66297a!8m2!3d-12.0523847!4d-76.9580836!16s%2Fg%2F11jymcwkwt?entry=ttu" },
        ],
    },
    {
        title: "Contacta con nosotros",
        links: [
            { name: "ventas@ikomiperu.com", link: "mailto:ventas@ikomiperu.com", target:"_blank"  },
            { name: "+51 985 068 416", link: "tel:+51985068416" },
            { name: "+51 981 453 306", link: "tel:+51981453306" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
