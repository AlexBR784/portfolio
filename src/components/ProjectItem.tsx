import Image from "next/image";

interface TechItem {
  techName: string;
  color: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tech: TechItem[];
}

export function ProjectItem({
  title,
  description,
  imageUrl,
  link,
  tech,
}: ProjectItemProps) {
  return (
    <div
      className="relative flex flex-row items-center justify-between hover:cursor-pointer hover:bg-[#303030] transition-all bg-[#373737] p-4 rounded-lg px-4 drop-shadow-white/30 drop-shadow-sm"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <Image
          src={imageUrl}
          alt={`${title} project thumbnail`}
          width={64}
          height={64}
          className="rounded-full border-10 border-white/10 w-16 h-16 object-cover"
        />
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="uppercase font-semibold text-gray-100">{title}</p>
            {tech.map((item, index) => (
              <span
                key={index}
                className="font-semibold text-gray-100 text-xs"
                style={{
                  backgroundColor: item.color,
                  padding: "0.2rem 0.5rem",
                  borderRadius: "0.25rem",
                }}
              >
                {item.techName}
              </span>
            ))}
          </div>
          <p className="text-[#acacac] text-sm text-center mt-3 sm:mt-0 sm:text-left">{description}</p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#646464"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="hidden sm:block"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>  
     <div className="flex flex-row items-center gap-1 sm:hidden absolute top-2 right-2">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#646464"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          
        >
          <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
          <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
          <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
          <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
          <path d="M5 3l-1 -1" />
          <path d="M4 7h-1" />
          <path d="M14 3l1 -1" />
          <path d="M15 6h1" />
        </svg>
        <p className="text-[#727272] text-xs">Tap me!</p>
     </div>

    </div>
  );
}
