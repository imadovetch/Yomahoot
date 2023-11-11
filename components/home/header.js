import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getUniqueId } from "../../utils/uniqueid"
import { Icon } from '@/components/modules'

const uniqueId = getUniqueId();
export {uniqueId}
function insertnewgame() {
	const data = {
		id: uniqueId,
	  questions: [],
	};
  

	const data1Json = JSON.stringify(data);
  

	localStorage.setItem('gameinprocess', data1Json);
  }

export default function Header(){

	const [darkTheme, setDarkTheme] = useState(false)
	const switchTheme = () => {
		
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
				<Icon type="game" size={30}/>
				<Link onClick={insertnewgame} href="./creategame" className="btn-base">Create Game</Link>
				<Link href="./joingame" className="btn-base">Join game</Link>
				<button className="btn-base" onClick={switchTheme}>
					{darkTheme ? 'Dark' : 'Light'}
				</button>
			</div>
			
		</header>
	)
	
}