import Image from "next/image";
import * as components from "@/components/modules"
import {user_id} from "./index"
export {user_id}

import { Lato } from 'next/font/google'
const lato = Lato({ weight: ["100", "300", "400", "700", "900"], subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`overflow-hidden h-full flex flex-col blocks animate-zoom ${lato.className}`}>
      <components.Header />
      <components.Introduction />
      <components.Footer />
    </main>
  );
}
