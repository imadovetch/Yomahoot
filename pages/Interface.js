import Image from "next/image";
import * as components from "@/components/modules"
import {user_id} from "./index"
export {user_id}
import React, { useEffect, useState } from 'react';
import { Lato } from 'next/font/google'
const lato = Lato({ weight: ["100", "300", "400", "700", "900"], subsets: ['latin'] })

export default function Home() {

  
  useEffect(() => {
    if (!localStorage.getItem('userid')) {
      window.location.replace('./');
    }
  }, []);
  return (
    <main className={`overflow-hidden h-full flex flex-col blocks animate-zoom ${lato.className}`}>
      <components.Header />
      <components.Introduction />
      <components.Footer />
    </main>
  );
}
