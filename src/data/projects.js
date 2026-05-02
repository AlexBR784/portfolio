import { getPath } from "../utils/path";

export const projects = [
    {
        id: 1,
        title: "Syndeo",
        description:
            "Gestiona tus suscripciones para que ninguna se te pase por alto.",
        imageUrl: getPath("/images/syndeo.png"),
        videoUrl: getPath("/videos/syndeo-demo.mp4"),
        link: "https://syndeo-xi.vercel.app",
        tech: [
            { techName: "Next", color: "rgb(8, 126, 164)" },
        ],
    },
    {
        id: 2,
        title: "Precio Energia",
        description:
            "Aplicación web que permite revisar el precio de la luz por horas.",
        imageUrl: getPath("/images/precioenergia.png"),
        videoUrl: getPath("/videos/precio-energia-demo.mp4"),
        link: "https://alexbr784.github.io/precioenergia",
        tech: [
            { techName: "React", color: "rgb(8, 126, 164)" },
            { techName: "Tailwind CSS", color: "#70c595" },
        ],
    },
    {
        id: 3,
        title: "Weather App",
        description:
            "Utilidad para consultar el tiempo actual en una ubicación específica",
        imageUrl: getPath("/images/weather-app.jpeg"),
        link: "https://alexbr784.github.io/weather-app",
        tech: [
            { techName: "React", color: "rgb(8, 126, 164)" }, { techName: "Tailwind CSS", color: "#70c595" },
            { techName: "Weather API", color: "#8ebd2b" },
        ],
    },
    {
        id: 4,
        title: "Gestor de recetas",
        description:
            "Aplicación web para gestionar recetas de cocina.",
        imageUrl: getPath("/images/gestor-recetas.png"),
        videoUrl: getPath("/videos/gestor-recetas-demo.mp4"),
        link: "https://alexbr784.github.io/gestor-recetas",
        tech: [
            { techName: "React", color: "rgb(8, 126, 164)" }, { techName: "TypeScript", color: "#007acc" }, { techName: "Tailwind CSS", color: "#70c595" }
        ],
    },
    {
        id: 5,
        title: "SF Package Generator",
        description:
            "Permite generar un 'package.xml' de Salesforce a partir de los metadatos anotados en un Excel.",
        imageUrl: getPath("/images/xml-package.png"),
        link: "https://github.com/AlexBR784/sf-packagexml-generator",
        tech: [
            { techName: "JavaScript", color: "#c7c66a" }, { techName: "Salesforce", color: "#70c595" },
            { techName: "XML", color: "#ffb55a" },
        ],
    },
    {
        id: 6,
        title: "X One Click Block",
        description:
            "Extensión de navegador que permite bloquear usuarios de Twitter/X con un solo clic.",
        imageUrl: getPath("/images/x-one-click-block.png"),
        link: "https://github.com/AlexBR784/x-one-click-block",
        tech: [
            { techName: "JavaScript", color: "#c7c66a" }
        ],
    },
];
