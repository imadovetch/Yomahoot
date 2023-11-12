import { useState } from "react"
import * as components from '@/components/modules'


export default function GameHeader() {
	const [darkTheme, setDarkTheme] = useState('light')
	const switchTheme = () => {

		if(darkTheme === 'light') {
			document.documentElement.setAttribute('theme', 'dark')
			setDarkTheme("dark")
		}else {
			document.documentElement.setAttribute('theme', 'light')
			setDarkTheme('light')
		}

	}
	return (
		<header className="bg-app-dark flex justify-between   items-center p-4 shadow-md animate-rotate45">
			<div className="flex w-3/5 ml-auto justify-between items-center">

			<div className="text-base font-bold">Think before you answer & Good luck</div>
			<button className="btn-base mr-4" onClick={switchTheme}>
			<components.Icon type={darkTheme === 'dark' ? 'sun' : 'moon'}/>
				</button>
			</div>
			
		</header>
	)
}