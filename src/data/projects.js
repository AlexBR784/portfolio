import { getPath } from "../utils/path";

export const projects = [
    {
        id: 1,
        title: "Precio Energia",
        description:
            "Aplicación web que permite revisar el precio de la luz por horas.",
        imageUrl: getPath("/images/precioenergia.png"),
        link: "https://alexbr784.github.io/precioenergia",
        tech: [
            { techName: "React", color: "rgb(8, 126, 164)" },
            { techName: "Tailwind CSS", color: "#70c595" },
        ],
    },
    {
        id: 2,
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
        id: 3,
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
];
