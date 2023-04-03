import React from "react"

const Counter = ({ title, number }) => {
	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div className="flex flex-col p-2 bg-neutral-800 rounded-box text-neutral-content">
				<div className="countdown font-mono text-5xl">
					<p style={{ "--value": number }}></p>
				</div>
				<h3 className="countdown justify-center">{title}</h3>
			</div>
		</div>
	)
}

export default Counter
