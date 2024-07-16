import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative z-[9999] h-12 w-full bg-dark-1 px-8">
        <nav className="w-full h-full flex flex-1 justify-end text-white px-2 border-0 border-b border-stone-50/25 transition-all">
          <div className="w-full h-full flex flex-1 gap-7 items-center justify-center font-medium">
            <Link href="/">Home</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Contact</Link>
          </div>
          <Image
            src="/assets/bars-2.svg"
            width={32}
            height={32}
            alt="Menu"
          />
        </nav>
    </header>
  )
}

export default Header;