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
      className="flex flex-row items-center justify-between hover:cursor-pointer hover:bg-[#303030] transition-all bg-[#373737] p-4 rounded-lg px-4 drop-shadow-white/30 drop-shadow-sm"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-row gap-4">
        <Image
          src={imageUrl}
          alt={`${title} project thumbnail`}
          width={64}
          height={64}
          className="rounded-full border-10 border-white/10"
        />
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row items-center gap-2">
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
          <p className="text-[#acacac] text-sm">{description}</p>
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
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </div>
  );
}
