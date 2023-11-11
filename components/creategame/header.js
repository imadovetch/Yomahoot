import { useState, useEffect } from "react"
import * as components from '@/components/modules'

export default function GameHeader() {

	const [theme, setTheme] = useState('dark')

	useEffect(() => {

		theme === 'dark' ? document.documentElement.setAttribute('theme', 'dark')
			  : document.documentElement.setAttribute('theme', 'light')

	}, [theme])

	const switchTheme = () => {

		theme === 'dark' ? setTheme('light') : setTheme('dark')

	}

	return (
		<header className="main-sub flex justify-between items-center shadow-md animate-rotate45">
			<div className="w-full flex justify-between items-center">
				<div className="text-2xl center flex items-center justify-center font-bold">
					<components.Icon type='star'/>
					Creating a game for you ....
				</div>
				<button className="btn-base center" onClick={switchTheme}>
						<components.Icon type={theme === 'dark' ? 'moon' : 'sun'}/>
				</button>
			</div>
		</header>
	)
}