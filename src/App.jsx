import Counter from "./components/Counter"
import Title from "./components/Title"

import bgPt from "./assets/background.jpg"

import useCountdown from "./hooks/useCountdown"

import "./index.css"

function App() {
	const [day, hour, minute, second] = useCountdown("Mar 27, 2023 10:30:00")

	return (
		<div className="App mx-auto" style={{ backgroundImage: `url(${bgPt})` }}>
			<div className="container h-screen p-36 mx-auto text-center font-extrabold text-4xl">
				<Title title="Contagem regressiva, nossa chegada em Portugal 🇵🇹" />
			</div>
			<div className="countdown-container flex mx-auto justify-center text-center font-mono text-4xl font-bold gap-5">
				<Counter title="Dias" number={day} />
				<Counter title="Horas" number={hour} />
				<Counter title="Minutos" number={minute} />
				<Counter title="Segundos" number={second} />
			</div>
		</div>
	)
}

export default App
