import Counter from "./components/Counter"
import Title from "./components/Title"

import bgPt from "./assets/background.jpg"

import useCountdown from "./hooks/useCountdown"

import "./index.css"

function App() {
	const [day, hour, minute, second] = useCountdown("Mar 27, 2023 10:30:00")

	return (
		<div className="container mx-auto">
			<div className="card bg-base-100 shadow-xl">
				<figure>
					<img src={bgPt} alt="lisbon raiwls" />
				</figure>
				<div>
					<div className="card-bod flex flex-row gap-5">
						<Title title="Chegaremos em Portugal 🇵🇹" />
						<Counter title="Dias" number={day} />
						<Counter title="Horas" number={hour} />
						<Counter title="Minutos" number={minute} />
						<Counter title="Segundos" number={second} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
