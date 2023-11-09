import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getUniqueId } from "../../utils/modules"; 
import {user_id} from "../../pages/Interface";

const uniqueId = getUniqueId();
export {uniqueId}
function insertnewgame(){
	
	const data = {uniqueId,user_id};

  fetch("/api/newgame", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

	
}

export default function Header(){

	const [darkTheme, setDarkTheme] = useState(false)
	const switchTheme = () => {
		console.log(user_id)
		if(!darkTheme) {
			document.documentElement.setAttribute('theme', 'dark')
			setDarkTheme(true)
		}else {
			document.documentElement.setAttribute('theme', 'light')
			setDarkTheme(false)
		}

	}
	
	return (
		<header className="bg-app-dark flex justify-between items-center p-4 shadow-md animate-rotate45">

			{/* Logo */}
			<div className="flex items-center gap-4">
				<img width="30" height="" src="https://img.icons8.com/fluency/96/ps-controller.png" alt="logo"/>
				<span className="text-base font-bold">Yoma</span>
			</div>

			{/* Links */}
			<div className="flex items-center gap-2">
				<Link onClick={insertnewgame} href="./preparegame" className="btn-base">Create Game</Link>
				<Link href="./joingame" className="btn-base">Join game</Link>
				<button className="btn-base" onClick={switchTheme}>
					{darkTheme ? 'Dark' : 'Light'}
				</button>
			</div>
			
		</header>
	)
	
}