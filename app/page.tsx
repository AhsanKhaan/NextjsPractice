import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center align-items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl mx-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome/>,
            },
            // {
            //   name: "About",
            //   link: "/about",
            //   icon: <FaInfoCircle />,
            // },
            // {
            //   name: "Contact",
            //   link: "/contact",
            //   icon: (
            //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            //   ),
            // },
          ]}
        />
      <Hero/>
      <Grid />
      </div>
    </main>
  );
}
