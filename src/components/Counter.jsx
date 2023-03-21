import React from "react"

const Counter = ({ title, number }) => {
	return (
		<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
			<div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
				<p className="countdown font-mono text-5xl">
					<p style={{ "--value": number }}></p>
				</p>
				<h3 className="countdown">{title}</h3>
			</div>
		</div>
	)
}

export default Counter
