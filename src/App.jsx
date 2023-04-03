import Counter from "./components/Counter"
import Title from "./components/Title"

import bgPt from "./assets/background.jpg"

import useCountdown from "./hooks/useCountdown"

import "./index.css"

function App() {
	const [day, hour, minute, second] = useCountdown("Apr 10, 2023 10:30:00")

	return (
		<div className="container mx-auto">
			<div className="hero bg-base-100 shadow-xl">
				<figure>
					<img
						src={bgPt}
						className="max-h-screen w-screen"
						alt="lisbon raiwls"
					/>
				</figure>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="-mt-40">
					<Title title="Chegada em Portugal 🇵🇹" />
				</div>
				<div className="max-w-md flex flex-row gap-5">
					<Counter title="Dias" number={day} />
					<Counter title="Horas" number={hour} />
					<Counter title="Minutos" number={minute} />
					<Counter title="Segundos" number={second} />
				</div>
			</div>
		</div>
	)
}

export default App
