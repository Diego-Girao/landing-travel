import Counter from "./components/Counter"
import Title from "./components/Title"

import bgPt from "./assets/background.jpg"

import useCountdown from "./hooks/useCountdown"

import "./index.css"

function App() {
	const [day, hour, minute, second] = useCountdown("Mar 27, 2023 10:30:00")

	return (
		<div className="App" style={{ backgroundImage: `url(${bgPt})` }}>
			<div className="container">
				<Title title="Contagem regressiva, nossa chegada em Portugal 🇵🇹" />
			</div>
			<div className="countdown-container">
				<Counter title="Dias" number={day} />
				<Counter title="Horas" number={hour} />
				<Counter title="Minutos" number={minute} />
				<Counter title="Segundos" number={second} />
			</div>
		</div>
	)
}

export default App
