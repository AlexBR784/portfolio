import Image from "next/image";
import { getPath } from "../utils/path";

export function Hero() {
  return (
    <div id="#home" className="flex flex-col items-center justify-center px-6 bg-[#212121] w-full h-full mt-5 rounded-xl pt-5 pb-5 border-2 shadow-xl border-[#2a2a2a]">
      <div className="w-full h-full p-3">
        <div className="flex flex-row items-center justify-between mb-4">
          <p className="text-gray-300 text-[0.5rem] sm:text-lg">· Software Developer ·</p>
          <div className="bg-blue-300/20 text-blue-300 rounded-full uppercase px-3 py-1 text-[0.5rem] sm:text-sm font-semibold">
            · Trabajando en NTT Data ·
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 mt-10">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="text-gray-100 text-2xl">
              Soy{" "}
              <span className="text-gray-400 font-semibold">
                Alejandro Bernardo
              </span>
            </div>
            <div className="text-[#acacac] text-sm mt-4">
              Graduado en Ingeniería Multimedia y trabajando como desarrollador
              en Salesforce CRM.
            </div>
            <div className="flex self-center sm:self-start">
              <a
                download="CV_Alejandro_Bernardo_Ruperez.pdf"
                href={getPath("/CV/CV_Alejandro_Bernardo_Ruperez.pdf")}
                className="bg-[#373737] p-2 text-gray-100 rounded-lg text-sm mt-5 hover:cursor-pointer hover:bg-[#323232] transition-all"
              >
                Descargar CV
              </a>
            </div>
          </div>
          <Image
            src={getPath("/images/profile-pic.png")}
            alt="Alejandro Bernardo"
            width={128}
            height={128}
            className="rounded-full w-32 h-32 border-10 border-[#c3c8d7]/5"
          />
        </div>
        
      </div>
    </div>
  );
}
