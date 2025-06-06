import { getPath } from "@/utils/path";
import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  "AI-Associate",
  "Associate",
  "JavaScript-Developer",
  "OmniStudio-Developer",
  "Platform-Developer-I",
  "Salesforce-Certified-Administrator",
  "Salesforce-Certified-Platform-App-Builder-Badge",
];

export function Experience() {
  // Duplicamos las certificaciones para crear el efecto de bucle
  const certsDupe = [...certs, ...certs];

  return (
    <>
      <div id="experience" className="flex flex-col justify-center p-1 bg-[#212121] w-full h-full mt-5  rounded-xl border-2 shadow-xl border-[#2a2a2a]">
        <p className="text-gray-300 px-5 pt-5 text-lg">· Certificaciones ·</p>
        <div className="relative overflow-hidden w-full p-3 ">
          <motion.div
            className="flex mt-5 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {certsDupe.map((cert, index) => (
              <div key={index} className="flex-shrink-0 px-4 rounded mx-2">
                <Image
                  src={getPath(`/images/certis/${cert}.webp`)}
                  alt={cert}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
