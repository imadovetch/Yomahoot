import { useEffect, useState } from "react";
import { uniqueidUser } from '@/utils/modules'

export default function ApiTest() {
	
	const [games, setGames] = useState(null);
	const [ErrorWolaMessage, setErrorWolaMessage] = useState(null);

	// const customFetch = (method, url, body = null) => {

	// 	const data = null

	// 	if (method === "GET") {
	// 		fetch(url).then((response) => response.json()).then((data) => { data = data })
	// 	} else if (method === "POST") {
	// 		fetch(url, {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(body),
	// 		})
	// 			.then((response) => response.json())
	// 			.then((data) => { data = data })
	// 	}

    //   return data

	// }

	const addGame = () => {
		setErrorWolaMessage(null)
		const storedDataJson = localStorage.getItem('gameinprocess');


  		const data = JSON.parse(storedDataJson);
		console.log(data);
		// const data = {
		// 	id: uniqueidUser(),
		// 	questions: [
		// 		{
		// 			id: "123123",
		// 			format: 4,
		// 			question: "What your name", // wa7ed l zero
		// 			answer1: "Wach imadbbb",
		// 			answer2: "Wach imadaaa",
		// 			answer3: "Wach ayman",
		// 			answer4: "Wach ayman",
		// 			correct: "Wach ayman",
		// 		},

		// 		{
		// 			id: "3452335",
		// 			format: 2,
		// 			question: "is your name ayman",
		// 			correct: false,
		// 		},
		// 	],
		// };
		
		fetch("/api/game", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				getGame()
			});
	};

	const getGame = (id) => {
		fetch("/api/game?id=jfbgkgK")
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data.game);
				setGames(data.game);
			});
	};

	// const getAllGames = () => {
	// 	fetch("/api/game?getall=1")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			if (data.message) setErrorWolaMessage(data.message);
	// 			else setGames(data.games);
	// 		});
	// }

	useEffect(getGame, []);



	return games ? (
		<div className="bg-slate-50 w-screen h-screen flex flex-col justify-center items-center gap-4">
			{games.questions.map((question) => {
				if (question.format === 4)
					return (
						<div className="w-[300px] bg-slate-300 text-slate-900 text-600 flex flex-col justify-center items-center gap-4 p-4 rounded-lg">
							<div className="text-xl font-bold">{question.question}</div>
							<div className="grid grid-cols-2 gap-2">
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									{question.answer1}
								</div>
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									{question.answer2}
								</div>
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									{question.answer3}
								</div>
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									{question.answer4}
								</div>
							</div>
						</div>
					);
				if (question.format === 2)
					return (
						<div className="w-[300px] bg-slate-300 text-slate-900 text-600 flex flex-col justify-center items-center gap-4 p-4 rounded-lg">
							<div className="text-xl font-bold">{question.question}</div>
							<div className="grid grid-cols-2 gap-2">
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									True
								</div>
								<div className="text-sm bg-slate-50 text-slate-900 p-2 rounded-lg">
									False
								</div>
							</div>
						</div>
					);
			})}
		</div>
	) : (
		<div className="w-screen h-screen flex justify-center items-center">
			<span className="text-xl font-black">Loading...</span>
		</div>
	);
  
}
