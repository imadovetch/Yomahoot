import { useState } from "react"

export default function GameHeader() {
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
		<header className="bg-app-dark flex justify-between   items-center p-4 shadow-md animate-rotate45">
			<div className="flex w-3/5 ml-auto justify-between items-center">

			<div className="text-base font-bold">Think before you answer & Good luck</div>
			<button className="btn-base mr-4" onClick={switchTheme}>
					{darkTheme ? 'Dark' : 'Light'}
				</button>
			</div>
			
		</header>
	)
}