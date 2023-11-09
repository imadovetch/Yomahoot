import Image from "next/image";
import { Inter } from "next/font/google"; // Explain font
import * as components from "@/components/modules"
import {user_id} from "./index"
export {user_id}


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.Header />
      <components.Introduction />
      <components.Footer />
    </main>
  );
}
