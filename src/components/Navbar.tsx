"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full text-gray-700 bg-[var(--bg-cream)]">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="relative md:mt-8">
            <Link
              href="/"
              className="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Prime Path Solutions
            </Link>
            <svg
              className="h-11 z-40 absolute -top-2 -left-3"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                fill="#65DAFF"
              />
            </svg>
          </div>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "h-full scale-y-100" : "h-0 scale-y-0"
          } md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 md:scale-y-100`}
        >
          <Link
            href="/"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            Home
          </Link>
          <Link
            href="/careers"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            Careers
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            About Us
          </Link>
          <Link
            href="/login"
            className="px-10 py-3 mt-2 text-sm text-center bg-white text-gray-800 rounded-full md:mt-8 md:ml-4"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-10 py-3 mt-2 text-sm text-center bg-[#F48C06] text-white rounded-full md:mt-8 md:ml-4"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// "use client";

// // import logoImage from "@/assets/images/logo.svg";
// import logoImage from "@/assets/images/logo.png";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// // import Button from "@/components/Button";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const navLinks = [
//   { label: "Home", href: "#" },
//   { label: "About Us", href: "#features" },
//   { label: "Contact Us", href: "#integrations" },
//   { label: "FAQs", href: "#faqs" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
//         <div className="container max-w-6xl">
//           <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
//             <figure className="grid grid-cols-2 lg:grid-cols-3  py-2 lg:px-2 px-4  items-center ">
//               <div>
//                 {/* <Image
//                   src={logoImage}
//                   alt="layer logo"
//                   // className="h-9 w-auto md:h-auto"
//                   width={120}
//                 /> */}
//                 Prime Path Solutions
//               </div>
//               <div className="hidden lg:flex justify-center items-center ">
//                 <nav className="flex gap-6 font-medium ">
//                   {navLinks.map((each) => (
//                     <a href={each.href} key={each.href}>
//                       {each.label}
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="lg:hidden"
//                 >
//                   {!isOpen ? (
//                     <motion.div
//                       initial={{ opacity: 1 }}
//                       animate={{
//                         opacity: isOpen ? 0 : 1,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Menu className="text-white" size={30} />
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{
//                         opacity: isOpen ? 1 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <X className="text-white" size={30} />
//                     </motion.div>
//                   )}
//                 </button>
//                 {/* <Button
//                                     variant="secondary"
//                                     className="hidden lg:inline-flex items-center"
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     variant="primary"
//                                     className="hidden lg:inline-flex items-center"
//                                 >
//                                     Signup
//                                 </Button> */}
//               </div>
//             </figure>

//             <AnimatePresence>
//               {isOpen && (
//                 <motion.figure
//                   initial={{ height: 0 }}
//                   animate={{ height: "auto" }}
//                   exit={{ height: 0 }}
//                   className="overflow-hidden lg:hidden"
//                 >
//                   <div className="flex flex-col items-center gap-4 py-4">
//                     {navLinks.map((link) => (
//                       <a key={link.href} href={link.href}>
//                         {link.label}
//                       </a>
//                     ))}
//                     {/* <Button className="w-3/4" variant="secondary">
//                       Log In
//                     </Button>
//                     <Button className="w-3/4" variant="primary">
//                       Sign Up
//                     </Button> */}
//                   </div>
//                 </motion.figure>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>
//       <div className="pb-[86px] md:pb-[98px]"></div>
//     </>
//   );
// }
