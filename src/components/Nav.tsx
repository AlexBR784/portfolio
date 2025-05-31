import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#212121] rounded-xl text-white drop-shadow-white/20 drop-shadow-sm">
      <ul className="flex space-x-4">
        <li>
          <Link href="#home" className="hidden hover:underline">
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
              className="hover:stroke-[#7e7e7e] transition-all hover:bg-[#373737] hover:rounded-full hover:p-0.5"
            >
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:underline">
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
              className="hover:stroke-[#7e7e7e] transition-all hover:bg-[#373737] hover:rounded-full hover:p-0.5"
            >
              <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:underline">
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
              className="hover:stroke-[#7e7e7e] transition-all hover:bg-[#373737] hover:rounded-full hover:p-0.5"
            >
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
              <path d="M19 16h-12a2 2 0 0 0 -2 2" />
              <path d="M9 8h6" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
