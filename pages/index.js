// Home Page //

import Link from "next/link";
import { giveUserId } from "@/utils/modules"

export default function Register() {

  const getStarted = () => {
    
    giveUserId()

  }

  return (
    <main className="main">
      <div className="center full">
        <Link className="btn-base" onClick={getStarted} href="./Interface">
          <span>Get Started</span>
        </Link>
      </div>
    </main>
  )

}
