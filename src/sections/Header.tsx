
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50 px-8">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={"/img/logosaas.png"}
                alt="Saas logo"
                height={40}
                width={40}
              />
              <span className="text-lg relative z-50 font-bold tracking-widest text-black/60 rounded-lg focus:outline-none focus:shadow-outline">
                Prime Path Solutions
              </span>
            </div>
            {/* <MenuIcon className="h-5 w-5 md:hidden" />
             */}

            <img className="h-5 w-5 md:hidden" src="/img/menu.svg" alt="" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Contact</a>
              {/* <a href="">Updates</a>
              <a href="">Help</a> */}
              <button className="bg-[#F48C06] text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get started Free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
