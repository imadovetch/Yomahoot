import * as components from "@/components/modules"
import Link from "next/link";
export default function Preparedgame(){
	const  gameid = "1699540946719-xbwogb";
	return(
		<main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
			<components.Headergame />
			<components.GameBodyprepared />
			<Link href="./bringgame" className="btn-base">Join game</Link>
			<components.Footer />
    	</main>
	)
}