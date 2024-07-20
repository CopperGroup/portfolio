import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"]
})

const Header = () => {
  return (
    <header className="relative z-[9999] h-12 w-full bg-dark-1 px-8">
        <nav className="w-full h-full flex flex-1 justify-end text-white px-2 border-0 border-b border-stone-50/25 transition-all">
          <div className={`${dancingScript.className} w-full h-full text-[24px] flex flex-1 gap-7 items-center justify-center font-regular italic`}>
            <Link href="/">Home</Link>
            <Link href="/">Projects</Link>
            <Link href="/contact-us">Contact</Link>
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